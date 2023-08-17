import { Injectable } from '@angular/core';
import { Car } from '../Models/car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  private apiUrl = 'http://localhost:50543/api/Car';

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCarById(carId: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${carId}`);
  }

}
