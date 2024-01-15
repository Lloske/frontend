import { TestBed } from '@angular/core/testing';

import { ContractualDataService } from './contractual-data.service';

describe('ContractualDataService', () => {
  let service: ContractualDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractualDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
