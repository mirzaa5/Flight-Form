import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../../core/services/flight-service';
import { FlightInfoPayload } from '../../models/flight.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-flight-form-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-form-component.html',
  styles: []
})
export class FlightFormComponent {
  //Signals for UI State
  submitting = signal(false);
  successMsg = signal<string | null>(null);
  errorMsg = signal<string | null>(null);

  //DI
  private fb = inject(FormBuilder)
  private flightService = inject(FlightService)
  private authservice = inject(AuthService)
  private router = inject(Router)

  //Reactive Form
  form = this.fb.group({
    airline:['', Validators.required],
    arrivalDate: ['', Validators.required],
    arrivalTime: ['', Validators.required],
    flightNumber: ['', Validators.required],
    numOfGuests: [1, [Validators.required, Validators.min(1)]],
    comments: [''],
  })

  //Submit Form
  onSubmit(){
    //reset state varaibles
    this.successMsg.set(null)
    this.errorMsg.set(null);

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    //creating payload
    const raw = this.form.value;
    const payload: FlightInfoPayload = {
      airline: raw.airline!,
      arrivalDate: raw.arrivalDate!,
      arrivalTime: raw.arrivalTime!,
      flightNumber: raw.flightNumber!,
      numOfGuests: Number(raw.numOfGuests!),
      comments: raw.comments || undefined,
    };

    //submit payload
    this.submitting.set(true);
    this.flightService.submit(payload).subscribe({
      next: () => {
        this.submitting.set(false);
        this.successMsg.set('Flight information submitted successfully');
        this.form.reset({numOfGuests: 1});

        //Auto clear success message after 3 seconds!
        setTimeout(() => this.successMsg.set(null), 3000)
      }, error: (err) => {
        this.submitting.set(false);
        this.errorMsg.set('Submission failed, Please try again.');
        console.error('Submission failed', err);
      }
    });
  }

  //SIgn out
  onSignOut(){
    this.authservice.logout()
    this.router.navigateByUrl('/login');
  }
}
