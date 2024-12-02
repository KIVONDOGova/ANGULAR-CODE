import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../services/service.service'; // Ensure the service path is correct
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-referral',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './refferals.component.html',
  styleUrls: ['./refferals.component.css']
})
export class ReferralComponent implements OnInit {
  referrals: any[] = [];
  referralPage = false;
  patients: any[] = [];
  selectedPatient: any = null;
  hospitals = ['Hospital A', 'Hospital B', 'Hospital C']; // Example hospital list
  selectedHospital: string | null = null; // Hospital selected by the user
  referralData: any = { // Data model for the referral form
    id: '',
    referringHospitalStaffId: '', // To be dynamically set (doctor's ID or staff ID)
    referredHospitalStaffId: '',
    patientId: '',  
    referringHospitalId: '',
    referredHospitalId: '',
    reason: '',
    status: '', 
    createdAt: '',
  };

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // You can replace this with a dynamic doctor ID if needed
    const doctorId = '123';  // Example doctor ID, replace it with actual logic
    this.fetchReferrals(doctorId); // Fetch the referrals on init
  }

  // Fetch referrals for a specific doctor (doctorId)
  fetchReferrals(doctorId: string): void {
    this.serviceService.getRefferals(doctorId).subscribe({
      next: (response) => {
        this.referrals = response; // Store the referral data
        this.patients = this.referrals.map((ref) => ({
          id: ref.id,
          name: `Patient ${ref.patientId}`, // Display name as needed
          referred: ref.status === 'Referred',
          gender: ref.gender || 'Unknown', // Use dynamic data if available
          nationality: ref.nationality || 'Unknown',
          dob: ref.dob || 'Unknown',
          age: this.calculateAge(ref.dob) || 'Unknown' // Example age calculation (optional)
        }));
      },
      error: (err) => {
        console.error('Error fetching referrals:', err);
      }
    });
  }

  // Helper function to calculate age based on DOB (Optional)
  calculateAge(dob: string): number {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // Select a patient and open the referral form
  openPatientDetails(patient: any): void {
    this.selectedPatient = patient;
    this.referralPage = true; // Show the referral form
    this.referralData.patientId = patient.id; // Set the selected patient ID in referralData
    this.referralData.referringHospitalId = 'Hospital A'; // Example, update with actual logic
  }

  // Cancel the referral process and reset the form
  cancelReferral(): void {
    this.referralPage = false; // Hide the referral form
    this.selectedPatient = null; // Reset selected patient
  }

  // Submit the referral data
  submitReferral(): void {
    if (this.isFormValid()) { // Check if form is valid
      this.serviceService.pushReferrals(this.referralData).subscribe(
        response => {
          console.log('Referral submitted successfully:', response);
          this.resetReferralForm(); // Reset form on successful submission
        },
        error => {
          console.error('Error submitting referral:', error);
          // Handle error (e.g., show an error message to the user)
        }
      );
    } else {
      console.log('Form is not valid!');
      // Optionally show a message indicating the form is not valid
    }
  }

  // Validate the referral form (check required fields)
  isFormValid(): boolean {
    return this.referralData.patientId && this.referralData.referringHospitalStaffId && this.referralData.reason;
  }

  // Reset the referral form after successful submission
  resetReferralForm(): void {
    this.referralPage = false;
    this.selectedPatient = null;
    this.referralData = {
      id: '',
      referringHospitalStaffId: '',
      referredHospitalStaffId: '',
      patientId: '',
      referringHospitalId: '',
      referredHospitalId: '',
      reason: '',
      status: '',
      createdAt: '',
    };
  }
}
