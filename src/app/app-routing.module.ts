import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './Components/contact-details/contact-details.component';
import { CarBookingComponent } from './Components/contact-details/car-booking/car-booking.component';

const routes: Routes = [
  { path: '', component: ContactDetailsComponent },
  { path: 'car', component: CarBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
