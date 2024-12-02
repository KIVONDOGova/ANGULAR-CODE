import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionFormService {

  constructor(private http:HttpClient) { }

  getAllData(id?:Number): Observable<any> {
    return this.http.get(`https://tiba-188778242087.us-central1.run.app/api/open/lookup/${id}`); // Adjust the endpoint
  }
  
}