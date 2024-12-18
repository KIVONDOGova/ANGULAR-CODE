import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralComponent } from './referral.component';

describe('RefferalsComponent', () => {
  let component: ReferralComponent;
  let fixture: ComponentFixture<ReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
