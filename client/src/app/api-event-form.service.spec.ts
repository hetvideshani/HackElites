import { TestBed } from '@angular/core/testing';

import { ApiEventFormService } from './api-event-form.service';

describe('ApiEventFormService', () => {
  let service: ApiEventFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEventFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
