import { TestBed } from '@angular/core/testing';

import { SaveContactInfoService } from './save-contact-info.service';

describe('SaveContactInfoService', () => {
  let service: SaveContactInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveContactInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
