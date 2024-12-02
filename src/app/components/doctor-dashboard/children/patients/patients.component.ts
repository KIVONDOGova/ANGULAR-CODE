import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports:[NgFor,NgIf,RouterOutlet,RouterLink,RouterModule],
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit {
  constructor(){}
  patients:{name:string}[]=[];
  showPatientPage:boolean=false;
  showReferPage:boolean = false;
  selectedPatient:any;
  showLabPage: boolean=false;
  showBloodInfections:boolean=false;
  showStoolInfections:boolean=false;

  ngOnInit(): void {
   /* let IdNumber=102;
    this.patientsService.getPatients(IdNumber).subscribe(
      (res)=>{
        
        this.patients=res;
        console.log('PATIENTS',this.patients)

      },
      (err)=>{
        console.log('PATIENTS-ERROR',err)
      },
    )
  }

  showPatientInfo(patient?:any){
    this.showPatientPage =! this.showPatientPage;
    this.selectedPatient = patient;
  }
  referPatient(){
    this.showReferPage =! this.showReferPage;
  }
  sendLab(){
    this.showLabPage =! this.showLabPage;
  }
  showBlood(){
    this.showBloodInfections =! this.showBloodInfections
  }
  showStool(){
    this.showStoolInfections =! this.showStoolInfections
  }
    */
}
}