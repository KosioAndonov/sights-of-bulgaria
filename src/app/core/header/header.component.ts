import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLogged: any;
  name: any;
   
  constructor(private router: Router, private userService: UserServiceService) {}
 

  ngOnInit(): void {
    this.userService.getLogged.asObservable().subscribe((data)=>{
      if(data = true){
      
     this.name = localStorage.getItem('loggedinUserId');
      
      this.isLogged = true;

      }
    });

     this.isLogged = localStorage.getItem('LoggedIn');
     this.name = localStorage.getItem('loggedinUserId');
  }

  logout():void{
    localStorage.removeItem("LoggedIn");
    localStorage.removeItem("loggedinUserId");
    this.isLogged=false;
    this.router.navigate(['/']);
  }
}
function reloadPage() {
  throw new Error('Function not implemented.');
}

