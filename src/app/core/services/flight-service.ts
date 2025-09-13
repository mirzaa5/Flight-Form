import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlightInfoPayload } from '../../models/flight.model';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  

  private readonly API_URL = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';
  private readonly token = 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh';
  private readonly candidate = 'Testing!';
  
  private http = inject(HttpClient)

  submit(payload: FlightInfoPayload){
    const headers =new HttpHeaders({
      token: this.token,
      candidate: this.candidate,
    });
    return this.http.post(this.API_URL, payload, { headers });
  } 
}
