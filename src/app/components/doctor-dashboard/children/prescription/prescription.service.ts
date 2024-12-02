import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http:HttpClient) { }

  getPrescription(id:number):Observable<any>{
    return this.http.get('https://tiba-188778242087.us-central1.run.app/api/open/prescription-user/${userid}')
  }
  
}