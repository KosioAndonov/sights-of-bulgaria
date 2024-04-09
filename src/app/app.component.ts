import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'sights-of-bulgaria';

  constructor(private service: SharedService){}

  sights:any = [];

  refreshSights(){
     this.service.getSights().subscribe((res)=>{
     this.sights = res;
     })
  }

  ngOnInit(){
    this.refreshSights();
  }
}
