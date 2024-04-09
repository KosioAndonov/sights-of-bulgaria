import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Sight } from '../types/sight';

@Component({
  selector: 'app-current-sight',
  templateUrl: './current-sight.component.html',
  styleUrl: './current-sight.component.css'
})
export class CurrentSightComponent implements OnInit {
  currentSight: any;
  allSights: any;

  currentName:string = this.activatedRoute.snapshot.params['sightName'];

  constructor(private activatedRoute : ActivatedRoute,
    private service: SharedService ){}

  ngOnInit(): void {
    this.service.getSights().subscribe({
      next: (data)=>{
        this.allSights = Object.values(data);
       
      }
      });  

    
 

  }
  

  
  
  
}
