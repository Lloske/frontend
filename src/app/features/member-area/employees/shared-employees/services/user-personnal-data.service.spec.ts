import { TestBed } from '@angular/core/testing';

import { UserPersonnalDataService } from './user-personnal-data.service';

describe('UserPersonnalDataService', () => {
  let service: UserPersonnalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPersonnalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
