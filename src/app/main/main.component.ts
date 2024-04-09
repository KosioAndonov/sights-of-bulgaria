import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Sight} from '../types/sight';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit {

  sightsArr: Sight[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.getSights().subscribe({
      next: (data)=>{
        this.sightsArr = Object.values(data);
      }
      });  
  }
}
