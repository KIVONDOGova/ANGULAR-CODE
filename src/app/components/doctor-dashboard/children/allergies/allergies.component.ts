import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AllergiesService } from './allergies.service';
@Component({
  selector: 'app-allergies',
  standalone:true,
  imports:[MatTableModule,NgFor],
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.scss']
})
export class AllergiesComponent implements OnInit {
  allergies:any=[]
    constructor(private allergiesService:AllergiesService){}
    ngOnInit(): void {
      let userId=102;
      this.allergiesService.getallergies(userId).subscribe(
        (res)=>{
          
          this.allergies=res;
          console.log('ALLERGIES',this.allergies)
  
        },
        (err)=>{
          console.log('ALLERGIES-ERROR',err)
        },
      )
    }
    userArray:any=[{
      userId: '12345',
      allergen: 'Peanuts',
      reactionType: 'Anaphylaxis',
      treatmentMedication: 'Epinephrine',
      severity: 'High',
      date: '2024-11-20',
      notes: 'Patient must avoid all peanut-based products.'
    },
    {
      userId: '67890',
      allergen: 'Dust',
      reactionType: 'Sneezing',
      treatmentMedication: 'Antihistamine',
      severity: 'Moderate',
      date: '2024-11-22',
      notes: 'Recommend keeping environment clean.'
    }
  ];
  displayedColumns: string[] = [
    'userId',
    'allergen',
    'reactionType',
    'treatmentMedication',
    'severity',
    'date',
    'notes'
  ];
}
