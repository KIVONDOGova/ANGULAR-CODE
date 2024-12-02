import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'https://tiba-188778242087.us-central1.run.app';

  constructor(private http: HttpClient) { }

  /**
   * Fetches all medical records from the API.
   * @returns An Observable containing the medical records.
   */
  getMedicalRecords(): Observable<any> {
    const endpoint = '/api/open/all_medicalRecords';
    return this.http.get<any>(`${this.baseUrl}${endpoint}`);
  }
  getAppointments(userId: string): Observable<any> {
    const endpoint = `/api/open/appointments/${userId}`;
    return this.http.get<any>(`${this.baseUrl}${endpoint}`);
  }
  getRefferals(hospitalStaffId: string):
    Observable<any> {
      const endpoint = `/api/open/doctor/${hospitalStaffId}`;
      return this.http.get<any>(`${this.baseUrl}${endpoint}`);
    }
    pushReferrals(referralData: any): Observable<any> {
      const endpoint = `/api/open/referrals`;
      const url = `${this.baseUrl}${endpoint}`; // Correct string interpolation
      return this.http.post<any>(url, referralData); // Pass referral data to the POST request
    }
    
}
