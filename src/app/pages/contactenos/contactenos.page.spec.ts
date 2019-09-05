import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosPage } from './contactenos.page';

describe('ContactenosPage', () => {
  let component: ContactenosPage;
  let fixture: ComponentFixture<ContactenosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
