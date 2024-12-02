import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ReceptionFormService } from './reception-form.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.component.html',
  styleUrls: ['./reception-form.component.css']
})
export class ReceptionFormComponent implements OnInit {
  patients: any[] = []; 
  idInput=new FormControl()
  patient:any;
  showErr:boolean=false
  constructor( private router: Router,
    private patientService: DataService, private receptionService:ReceptionFormService) {}

  ngOnInit(): void {
     
  }

  // Fetch all registered patients
  getAllPatients(): void {
    let idNumber=11111111;
    
    this.patientService.getData(idNumber).subscribe(
      (res) => {
        this.patients = res; 
      },
      (err) => {
        this.showErr=true;
        console.error('Error fetching patients:', this.showErr);
        
      }
    );
  }

  // Fetch a specific patient by ID
  getPatient(): void {
    this.receptionService.getAllData(this.idInput.value).subscribe(
      (res)=>{
        this.patient=res;
        console.log(this.patient)
        this.router.navigate(['/triage-dashboard'])
      },
      (err)=>{
        console.log(err)
        this.showErr=true;
      },
    )
  }
}
