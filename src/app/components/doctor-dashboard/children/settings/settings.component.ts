import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports:[NgIf],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  showUserInfo = false;
  showUpdate:boolean=false;

  user = {
    name: 'Dr Kivondo',
    role: 'Administrator',
    email: 'kivondo720@gmail.com',
    phone: '+1234567890',
    gender: 'Male',
  };

  toggleUserInfo() {
    this.showUserInfo = !this.showUserInfo;
  }
  update(){
    this.showUpdate=!this.showUpdate;
  }
}
