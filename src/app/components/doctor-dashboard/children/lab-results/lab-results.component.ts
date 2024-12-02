import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.scss']
})
export class LabResultsComponent implements OnInit {
  labResults: any[] = []; // Corrected: Initialized the array correctly
  displayedColumns: string[] = [
    'testName',
    'testCode',
    'resultValue',
    'unit',
    'referenceRange',
    'status',
    'performedAt',
    'reportedAt',
    'notes',
    'medicalRecordsId'
  ]; // Table column headers

  constructor() {} // Corrected service name capitalization

  ngOnInit(): void {
   
  }

  // Fetch lab results
  getLabResults(): void {
  
  }
}
