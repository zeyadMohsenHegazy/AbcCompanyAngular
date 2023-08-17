import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/car';
import { CarServiceService } from 'src/app/Services/car-service.service';

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.css'],
})
export class CarBookingComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarServiceService) {}
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars(): void {
    this.carService.getAllCars().subscribe((DbCars) => {
      this.cars = DbCars;
    });
  }
}
