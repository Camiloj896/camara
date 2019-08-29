import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesPage } from './transacciones.page';

describe('TransaccionesPage', () => {
  let component: TransaccionesPage;
  let fixture: ComponentFixture<TransaccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
