import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab-dashboard',
  templateUrl: './lab-dashboard.component.html',
  styleUrls: ['./lab-dashboard.component.css'],
})
export class LabDashboardComponent {
  PatientID:string='';
  showLabTests:boolean=false;

  patients = [
    { id: '12345678', name: 'Thomas Mumo', age: 23, gender: 'Male', dob: '2000-04-25' },
    { id: '87654321', name: 'Ian Mumo', age: 21, gender: 'Female', dob: '2002-09-12' },
  ];
  
  selectedPatient: any = null;
  alertMessage: string | null = null;
  testResultsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testResultsForm = this.fb.group({
      stoolTests: this.fb.group({
        rotavirus: [''],
        novovirus: [''],
        adenovirus: [''],
        enterovirus: [''],
        sapovirus: [''],
      }),
      bloodTests: this.fb.group({
        hiv: [''],
        hepatitisB: [''],
        hepatitisC: [''],
        zika: [''],
        rabies: [''],
      }),
      utiTests: this.fb.group({
        adenovirus: [''],
        bkVirus: [''],
        jcVirus: [''],
        herpesSimplex: [''],
        zika: [''],
      }),
    });
  }

  selectPatient(patient: any) {
    this.selectedPatient = patient;
  }
  searchPatient(patientID:Event){
    const target = patientID.target as HTMLInputElement
    this.PatientID=target.value;
  }
  uploadFinding(testType: string) {
    document.getElementById(`${testType}-file-input`)?.click();
  }

  handleFileUpload(event: any, testType: string) {
    const file = event.target.files[0];
    if (file) {
      alert(`File "${file.name}" selected for ${testType} test.`);
    }
  }

  submitTests() {
    console.log('Submitting tests for patient:', this.selectedPatient);
    console.log('Test Results:', this.testResultsForm.value);

    // Simulate sending data back to the doctor's portal
    this.alertMessage = 'Lab tests submitted to doctor successfully!';
    setTimeout(() => (this.alertMessage = null), 3000);
  }
}
