import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
 
})
export class LoginComponent {
  loginObj:login;
  @ViewChild('myForm') form!:NgForm
  jwt = new JwtHelperService()
  isLoading: boolean = false;
  

  constructor(private http:HttpClient, private router:Router){this.loginObj=new login()}

  onLogin(){
    this.loginObj.email=this.form.value.email;
    this.loginObj.password=this.form.value.password;
    console.log(this.form)
    this.isLoading= true,
    
    this.http.post('https://tiba-188778242087.us-central1.run.app/api/open/user/logIn',this.loginObj).subscribe(
      {
        next: (response:any) => {
          localStorage.setItem('Token',response.data.token)
          console.log('Success:', response);
          const token:any=localStorage.getItem('Token')
          this.router.navigate(['reception-form'])
          console.log(this.jwt.decodeToken(token))
          this.isLoading = false
        },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {
          console.log('Request complete');
        }
      }
    )
    // this.http.post('https://transportapp.onrender.com/api/open/customers/login',this.loginObj).subscribe(
    //   {
    //     next: (response:any) => {
    //       localStorage.setItem('Token',response.body.token)
    //       console.log('Success:', response);
    //       const token:any=localStorage.getItem('Token')
          
    //       console.log(this.jwt.decodeToken(token))
    //     },
    //     error: (error) => {
    //       alert(error.message);
    //     },
    //     complete: () => {
    //       console.log('Request complete');
    //     }
    //   }
    // )
  }



}

export class login{
  email:string;
  password:string;
  
  constructor(){
    this.email='';
    this.password='';
  }
}
