import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  prescriptions: any[] = [];
  
  // Form fields
  dosage: string = '';
  frequency: string = '';
  duration: string = '';
  quantity: number | null = null;
  prescribedDate: Date | null = null;
  status: string = 'Pending';
  notes: string = '';
  userId: string = '';
  hospitalStaffId: string = '';

  constructor(private prescriptionsService: PrescriptionService) {}

  ngOnInit(): void {
    let userId=102;
    this.prescriptionsService.getPrescription(userId).subscribe(
      (res: any) => {
        this.prescriptions = res;
        console.log('PRESCRIPTIONS', this.prescriptions);
      },
      (err) => {
        console.error('PRESCRIPTION-ERROR', err);
      }
    );
  }

  clearForm(): void {
    this.dosage = '';
    this.frequency = '';
    this.duration = '';
    this.quantity = null;
    this.prescribedDate = null;
    this.status = 'Pending';
    this.notes = '';
    this.userId = '';
    this.hospitalStaffId = '';
  }

 
  samplePrescriptions: any[] = [
    {
      dosage: '2x3',
      frequency: 'daily',
      duration: '1 month',
      quantity: '10 ml',
      prescribedDate: new Date('2000-12-12'),
      status: 'in progress',
      notes: 'very sick',
      userId: '12345678',
      hospitalStaffId: '009',
    },
    {
      dosage: '2x2',
      frequency: 'daily',
      duration: '28 days',
      quantity: '10 ml',
      prescribedDate: new Date('2000-12-12'),
      status: 'in progress',
      notes: 'very sick',
      userId: '12345678',
      hospitalStaffId: '009',
    },
    // Add other objects here
  ];
}
