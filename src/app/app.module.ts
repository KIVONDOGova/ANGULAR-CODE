import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReceptionFormComponent } from './reception-form/reception-form.component';
import { LabDashboardComponent } from './lab-dashboard/lab-dashboard.component';
import { ImagingDashboardComponent } from './imaging-dashboard/imaging-dashboard.component';
import { PrescriptionComponent } from './components/doctor-dashboard/children/prescription/prescription.component';
import { LabResultsComponent } from './components/doctor-dashboard/children/lab-results/lab-results.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AssignedPatientComponent } from './components/doctor-dashboard/children/assigned-patient/assigned-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    ReceptionFormComponent,
    LabDashboardComponent,
    ImagingDashboardComponent,
    AssignedPatientComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
 
  
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
