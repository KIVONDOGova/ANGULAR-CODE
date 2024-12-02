import { TestBed } from '@angular/core/testing';

import { ReceptionFormService } from './reception-form.service';

describe('ReceptionFormService', () => {
  let service: ReceptionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
