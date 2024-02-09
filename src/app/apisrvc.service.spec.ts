import { TestBed } from '@angular/core/testing';

import { ApisrvcService } from './apisrvc.service';

describe('ApisrvcService', () => {
  let service: ApisrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
