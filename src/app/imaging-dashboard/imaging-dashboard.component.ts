import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imaging-dashboard',
  templateUrl: './imaging-dashboard.component.html',
  styleUrls: ['./imaging-dashboard.component.css'],
})
export class ImagingDashboardComponent {
  patients = [
    { id: '12345678', name: 'Thomas Mumo', age: 23, gender: 'Male', dob: '2000-04-25' },
    { id: '87654321', name: 'Ian Mumo', age: 21, gender: 'Female', dob: '2002-09-12' },
  ];
  PatientID:string='';
  searchPatient:boolean=false;
  selectedPatient: any = null;
  showTests: boolean = false;
  alertMessage: string | null = null;
  imagingResultsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.imagingResultsForm = this.fb.group({
      ultrasoundTests: this.fb.group({
        chest: [''],
        abdomen: [''],
        pelvic: [''],
        vascular: [''],
        spineAndJoints: [''],
      }),
      ctScanTests: this.fb.group({
        headAndNeck: [''],
        spine: [''],
        upperLimbs: [''],
        lowerLimbs: [''],
        chest: [''],
      }),
      xRayTests: this.fb.group({
        chest: [''],
        spine: [''],
        upperLimbs: [''],
        lowerLimbs: [''],
        abdomen: [''],
        pelvic: [''],
      }),
    });
  }

  selectPatient(patient: any) {
    this.selectedPatient = patient;
  }

  search_Patient(ID:Event){
    const target = ID.target as HTMLInputElement
    this.PatientID=target.value;
  }
  toggleImagingTests() {
    this.showTests = !this.showTests;
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
    console.log('Submitting imaging tests for patient:', this.selectedPatient);
    console.log('Imaging Results:', this.imagingResultsForm.value);

    // Simulate sending data back to the doctor's portal
    this.alertMessage = 'Imaging tests submitted to doctor successfully!';
    setTimeout(() => (this.alertMessage = null), 3000);
  }
}
