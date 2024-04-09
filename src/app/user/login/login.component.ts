import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  password:any; 
  allAccounts:any = [];
  constructor(private router:Router,private userService : UserServiceService){}

  login(form: NgForm) {
    const {email,password}= form.value;

    this.userService.getAll().subscribe({
      next: (data)=>{
        this.allAccounts.push(Object.values(data));        
        this.allAccounts[0].forEach((acc:any)=>{
          if(acc.email == email){
            if(acc.password == password){
              localStorage.setItem('loggedinUserId', acc.name);
              localStorage.setItem("LoggedIn","true");
              this.userService.getLogged.next("true");

              
              this.router.navigate(['/']);
            }
          }
        })
      }});
    
    
  }
}
