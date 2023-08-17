import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarBookingInfo } from '../Models/i-car-booking-info';

@Injectable({
  providedIn: 'root'
})
export class ConfirmReservationService {
  private apiUrl = '  http://localhost:50543/api/ConfirmBooking';


  constructor(private http: HttpClient) { }

  PostCarBookingInfo(CarBookingInfo: ICarBookingInfo) {
    return this.http.post<ICarBookingInfo>(`${this.apiUrl}`, CarBookingInfo);
  }

}
