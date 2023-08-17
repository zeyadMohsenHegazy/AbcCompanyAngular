import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SaveContactInfoService } from 'src/app/Services/save-contact-info.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  ContactForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contactService: SaveContactInfoService
  ) {}

  ngOnInit(): void {
    this.ContactForm = this.fb.group({
      CustomerName: ['', Validators.required],
      Nationality: ['', Validators.required],
      DrivingLicenseNum: ['', Validators.required],
      TransactionDate: ['', Validators.required],
      AdvancedPayment: ['', Validators.required],
    });
  }

  SubmiteTheForm() {
    if (this.ContactForm.valid) {
      this.contactService.SaveContactInfo(this.ContactForm.value).subscribe({
        next: (value: any) => {
          this.contactService.SaveBookingId(value.bookingId);
          this.contactService.SetTransactionDate(value.transactionDate);
          alert('Now time to book a car');
          this.router.navigate(['car']);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      this.ValidateFormFields(this.ContactForm);
    }
  }

  private ValidateFormFields(_FormGroup: FormGroup) {
    Object.keys(_FormGroup.controls).forEach((field) => {
      const control = _FormGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
        control.updateValueAndValidity();
      } else if (control instanceof FormGroup) {
        this.ValidateFormFields(control);
      }
    });
  }
}
