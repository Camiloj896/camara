import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbiquenosPage } from './ubiquenos.page';

describe('UbiquenosPage', () => {
  let component: UbiquenosPage;
  let fixture: ComponentFixture<UbiquenosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbiquenosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbiquenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
