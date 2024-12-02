import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPatientComponent } from './assigned-patient.component';

describe('AssignedPatientComponent', () => {
  let component:AssignedPatientComponent;
  let fixture: ComponentFixture<AssignedPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
