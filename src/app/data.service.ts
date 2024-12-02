import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http: HttpClient) {}


  getData(id:number): Observable<any> {
    return this.http.get<any>(`https://tiba-app-1055607092016.us-central1.run.app/api/open/reception/exists/${id}`);
  }
}
