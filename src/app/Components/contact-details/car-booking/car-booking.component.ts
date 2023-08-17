import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/car';
import { ICarBookingInfo } from 'src/app/Models/i-car-booking-info';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { ConfirmReservationService } from 'src/app/Services/confirm-reservation.service';
import { SaveContactInfoService } from 'src/app/Services/save-contact-info.service';

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.css'],
})
export class CarBookingComponent implements OnInit {
  cars: Car[] = [];
  SelectedCars: Car[] = [];
  SelectedCar?: Car;
  rentDate: string = '';
  transactionDate: string = '';
  rentDuration: number = 0;
  CarBookingObj: ICarBookingInfo = {
    RentDuration: 0,
    CarId: 0,
    BookingId: 0,
  };
  constructor(
    private carService: CarServiceService,
    private contactInfo: SaveContactInfoService,
    private confirmBookingService: ConfirmReservationService
  ) {}
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars(): void {
    this.carService.getAllCars().subscribe((DbCars) => {
      this.cars = DbCars;
    });
  }

  viewDetails(id: number) {}

  SelectCar(CarId: number) {
    this.SelectedCar = this.cars.find((car) => car.carId === CarId);

    const isCarAlreadySelected = this.SelectedCars.some(
      (car) => car.carId === CarId
    );

    if (!isCarAlreadySelected) {
      this.SelectedCars.push(this.SelectedCar!);
    }

    console.log(this.SelectedCars);
  }

  DeleteCar(CarId: number) {
    this.SelectedCars = this.SelectedCars.filter((car) => car.carId !== CarId);
  }

  CalculateRentDuration() {
    this.transactionDate = this.contactInfo.GetTransactionDate()!;
    const start = new Date(this.transactionDate);
    const end = new Date(this.rentDate);
    const timeDiff = end.getTime() - start.getTime();
    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    this.rentDuration = days;
  }

  ConfirmBooking(SelectedCarID: number) {
    //CARID
    //Booking ID from Local storage
    //rent duration form the function
    const bookingIdString = this.contactInfo.GetBookingId();
    const bookingId = parseInt(bookingIdString!);
    this.CarBookingObj.BookingId = bookingId;
    this.CarBookingObj.CarId = SelectedCarID;
    this.CarBookingObj.RentDuration = this.rentDuration;

    this.confirmBookingService
      .PostCarBookingInfo(this.CarBookingObj!)
      .subscribe({
        next(value) {
          alert('You Have Confirmed the reservation');
        },
        error(err) {
          console.log(err);
        },
      });
    this.DeleteCar(SelectedCarID);
  }
}
