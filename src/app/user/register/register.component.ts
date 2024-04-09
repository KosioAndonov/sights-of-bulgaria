import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  

  constructor(private router: Router, private fb: FormBuilder,private userService: UserServiceService ){}
 

  register(regForm: NgForm): void {
    if (regForm.value) {

      const {name, email, password} = regForm.value;
      
        this.userService.register(name, email, password).subscribe();
        this.router.navigate(['/auth/login']);
    }

      
  }
}

