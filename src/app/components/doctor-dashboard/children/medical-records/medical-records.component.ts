import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  standalone:true,
  selector: 'app-medical-record',
  imports:[NgFor],
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class medicalRecordsComponent implements OnInit {
  medicalrecords:any=[]
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
   
      this.serviceService.getMedicalRecords().subscribe(
        (res)=>{
          
          this.medicalrecords=res;
          console.log('Medicalrecords',this.medicalrecords)

        },
        (err)=>{
          console.log('MEDICALRECORDS-ERROR',err)
        },
      )
  }
 
}
