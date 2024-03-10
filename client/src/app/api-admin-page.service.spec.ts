import { TestBed } from '@angular/core/testing';

import { ApiAdminPageService } from './api-admin-page.service';

describe('ApiAdminPageService', () => {
  let service: ApiAdminPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAdminPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
