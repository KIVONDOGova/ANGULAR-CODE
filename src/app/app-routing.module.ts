import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReceptionFormComponent } from './reception-form/reception-form.component';
import { TriageDashboardComponent } from './triage-dashboard/triage-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { LabDashboardComponent } from './lab-dashboard/lab-dashboard.component';
import { ImagingDashboardComponent } from './imaging-dashboard/imaging-dashboard.component';
import { LabResultsComponent } from './components/doctor-dashboard/children/lab-results/lab-results.component';
import { PrescriptionComponent } from './components/doctor-dashboard/children/prescription/prescription.component';
import { medicalRecordsComponent } from './components/doctor-dashboard/children/medical-records/medical-records.component';
import { AppointmentsComponent } from './components/doctor-dashboard/children/appointments/appointments.component';
import { AllergiesComponent } from './components/doctor-dashboard/children/allergies/allergies.component';
import { ReferralComponent } from './components/doctor-dashboard/children/referrals/referral.component';
const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  {path: 'allergies', component: AllergiesComponent},
  {path: 'prescription', component:PrescriptionComponent},
  {path: 'lab-results', component:LabResultsComponent},
  {path: 'appointment', component:AppointmentsComponent},
  {path: 'referrals', component:ReferralComponent},
  {path: 'doctor-dashboard',component: DoctorDashboardComponent},
  { path: 'lab-dashboard', component: LabDashboardComponent },
  { path: 'reception-form', component: ReceptionFormComponent },
  { path: 'imaging-dashboard', component: ImagingDashboardComponent },
  { path: 'medical-record', component: medicalRecordsComponent},
  { path: 'triage-dashboard', component: TriageDashboardComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
