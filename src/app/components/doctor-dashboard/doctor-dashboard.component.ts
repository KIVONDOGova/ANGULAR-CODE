import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { PatientsComponent } from './children/patients/patients.component';
import { AllergiesComponent } from "./children/allergies/allergies.component";
import { medicalRecordsComponent } from './children/medical-records/medical-records.component';
import { app } from '../../../../server';
import { AppointmentsComponent } from './children/appointments/appointments.component';
import { SettingsComponent } from './children/settings/settings.component';
import { NgIf } from '@angular/common';
import { ReferralComponent } from './children/referrals/referral.component';

@Component({
  standalone:true,
  imports: [PatientsComponent, AppointmentsComponent, SettingsComponent,ReferralComponent,medicalRecordsComponent, NgIf, medicalRecordsComponent],
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {
  showPatients:boolean=true;
  showRecords:boolean=false;
  showAppointments:boolean=false;
  showSettings:boolean=false;
  showrefferals:boolean=false;


  hospitals = ['Kenyatta National Hospital', 'Nairobi West Hospital', 'St Marys Hospital'];
  doctor = ['Dr. Ken', 'Dr. George', 'Dr. Alice', 'Dr. Smith'];
  patients = [
    { name: 'John Doe', age: 35, gender: 'Male', id: '12345678', status: 'untreated' },
    { name: 'Jane Sam', age: 29, gender: 'Female', id: '12435698', status: 'untreated' }
  ];
  selectedPatient: any = null;
  selectedDoctor = 'Dr. Ken';
  hospitalName = 'Nairobi West Hospital';

  // Handle patient selection
  selectPatient(patient: any) {
    this.selectedPatient = patient;
  }

  // Handle doctor switching
  switchDoctor(doctor: string) {
    this.selectedDoctor = doctor;
  }

  
  completeProcess() {
    if (this.selectedPatient) {
      this.selectedPatient.status = 'treated';
      this.selectedPatient = null;
    }
  }
 changeComponent(name:string){
  if(name==='patients'){
    this.showPatients=true;
    this.showRecords=false;
    this.showAppointments=false;
    this.showSettings=false;
    this.showrefferals=false
  }else if(name==='records'){
    this.showPatients=false;
    this.showRecords=true;
    this.showAppointments=false;
    this.showSettings=false;
    this.showrefferals=false
  }else if(name==='settings'){
    this.showPatients=false;
    this.showRecords=false;
    this.showAppointments=false;
    this.showSettings=true;
    this.showrefferals=false
  }else if(name==='appointments'){
    this.showPatients=false;
    this.showRecords=false;
    this.showAppointments=true;
    this.showSettings=false;
    this.showrefferals=false
  }else if(name==='refferals'){
    this.showPatients=false;
    this.showRecords=false;
    this.showAppointments=false;
    this.showSettings=false;
    this.showrefferals=true;
  }
 }
}
