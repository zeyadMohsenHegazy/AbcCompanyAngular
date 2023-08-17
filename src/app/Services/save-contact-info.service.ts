import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../Models/contact-info';

@Injectable({
  providedIn: 'root',
})
export class SaveContactInfoService {
  private apiUrl = 'http://localhost:50543/api/CustomerBooking';

  constructor(private http: HttpClient) {}

  SaveContactInfo(UserObj: ContactInfo) {
    return this.http.post<ContactInfo>(`${this.apiUrl}`, UserObj);
  }
}
