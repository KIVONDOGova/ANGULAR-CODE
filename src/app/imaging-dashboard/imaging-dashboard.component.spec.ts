import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagingDashboardComponent } from './imaging-dashboard.component';

describe('ImagingDashboardComponent', () => {
  let component: ImagingDashboardComponent;
  let fixture: ComponentFixture<ImagingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagingDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
