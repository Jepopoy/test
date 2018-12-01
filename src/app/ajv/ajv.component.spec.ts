import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjvComponent } from './ajv.component';

describe('AjvComponent', () => {
  let component: AjvComponent;
  let fixture: ComponentFixture<AjvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
