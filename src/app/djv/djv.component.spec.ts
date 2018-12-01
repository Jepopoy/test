import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjvComponent } from './djv.component';

describe('DjvComponent', () => {
  let component: DjvComponent;
  let fixture: ComponentFixture<DjvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
