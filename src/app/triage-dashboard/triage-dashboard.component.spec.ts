import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriageDashboardComponent } from './triage-dashboard.component';

describe('TriageDashboardComponent', () => {
  let component: TriageDashboardComponent;
  let fixture: ComponentFixture<TriageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriageDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
