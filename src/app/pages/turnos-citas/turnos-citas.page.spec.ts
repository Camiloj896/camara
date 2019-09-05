import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosCitasPage } from './turnos-citas.page';

describe('TurnosCitasPage', () => {
  let component: TurnosCitasPage;
  let fixture: ComponentFixture<TurnosCitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosCitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
