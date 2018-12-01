import { Component, OnInit } from '@angular/core';
import * as djv from 'djv';

@Component({
  selector: 'app-djv',
  templateUrl: './djv.component.html',
  styleUrls: ['./djv.component.css']
})
export class DjvComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const djvValidator = new djv();
    const jsonSchema = {
      common: {
        properties: {
          type: {
            enum: ['common']
          }
        },
        required: ['type']
      }
    };

    // Use `addSchema` to add json-schema
    djvValidator.addSchema('test', jsonSchema);
    const commonValidate = djvValidator.validate('test#/common', { type: 'common' });
    // => undefined

    const customValidate = djvValidator.validate('test#/common', { type: 'custom' });
    // => 'required: data'

    console.log(commonValidate);
    console.log(customValidate);
  }
}
