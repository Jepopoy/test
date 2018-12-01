import { Component, OnInit } from '@angular/core';
import * as Ajv from 'ajv';

@Component({
  selector: 'app-ajv',
  templateUrl: './ajv.component.html',
  styleUrls: ['./ajv.component.css']
})
export class AjvComponent implements OnInit {
  schema = {
    properties: {
      smaller: {
        type: 'number',
        maximum: { $data: '1/larger' }
      },
      larger: { type: 'number' }
    }
  };

  validData = {
    smaller: 5,
    larger: 7
  };

  constructor() {}

  ngOnInit() {
    const ajvVAlidator = new Ajv();
    ajvVAlidator.compile(this.schema);
    ajvVAlidator.validate(this.schema, this.validData); // true
    console.log(ajvVAlidator.errors);
  }
}
