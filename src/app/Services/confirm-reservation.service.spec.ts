import { TestBed } from '@angular/core/testing';

import { ConfirmReservationService } from './confirm-reservation.service';

describe('ConfirmReservationService', () => {
  let service: ConfirmReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
