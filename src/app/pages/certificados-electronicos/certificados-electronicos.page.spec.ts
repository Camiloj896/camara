import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosElectronicosPage } from './certificados-electronicos.page';

describe('CertificadosElectronicosPage', () => {
  let component: CertificadosElectronicosPage;
  let fixture: ComponentFixture<CertificadosElectronicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadosElectronicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosElectronicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
