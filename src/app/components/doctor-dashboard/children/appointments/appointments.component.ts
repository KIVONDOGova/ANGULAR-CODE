import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-appointments',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];

  constructor( private serviceService: ServiceService) {}

  ngOnInit(): void {
        this.fetchAppointments();
  }

  fetchAppointments(): void {
    const userId = '22222222'; // Replace with the actual user ID you want to fetch appointments for.
    
    this.serviceService.getAppointments(userId).subscribe(
      (res) => {
        this.appointments = res;
        console.log('Appointments fetched successfully:', this.appointments);
      },
      (err) => {
        console.error('Error in getting appointments:', err);
      }
    );
  }
    
  }

