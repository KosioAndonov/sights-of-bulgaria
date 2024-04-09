import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  getSights(){
    return this.http.get<any>('https://sights-of-bulgaria-default-rtdb.europe-west1.firebasedatabase.app/.json');
  }

  getCurrent(currentName:string){
    let allSights:any;
    return this.getSights().subscribe((data)=>{
      allSights = Object.values(data);
      allSights.forEach((sight:any) => {
        if(sight.name == currentName){    
           return sight;
        }
      });
    });

   
  }
}
