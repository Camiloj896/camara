import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosectoresPage } from './macrosectores.page';

describe('MacrosectoresPage', () => {
  let component: MacrosectoresPage;
  let fixture: ComponentFixture<MacrosectoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacrosectoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrosectoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
