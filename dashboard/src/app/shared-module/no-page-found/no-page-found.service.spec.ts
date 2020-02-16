import { TestBed } from '@angular/core/testing';

import { NoPageFoundService } from './no-page-found.service';

describe('NoPageFoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPageFoundService = TestBed.get(NoPageFoundService);
    expect(service).toBeTruthy();
  });
});
