import { TestBed } from '@angular/core/testing';

import { UbiquenosService } from './ubiquenos.service';

describe('UbiquenosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbiquenosService = TestBed.get(UbiquenosService);
    expect(service).toBeTruthy();
  });
});
