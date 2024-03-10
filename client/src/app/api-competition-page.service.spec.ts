import { TestBed } from '@angular/core/testing';

import { ApiCompetitionPageService } from './api-competition-page.service';

describe('ApiCompetitionPageService', () => {
  let service: ApiCompetitionPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCompetitionPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
