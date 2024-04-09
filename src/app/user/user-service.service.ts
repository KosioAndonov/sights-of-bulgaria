import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public getLogged = new Subject();

  constructor(private http:HttpClient) { }

  register(name:string, email:string, password:string){
    return this.http.post<any>('https://sights-accounts-default-rtdb.asia-southeast1.firebasedatabase.app/.json',{name,email,password});
  }

  getAll(){

    return this.http.get<any>('https://sights-accounts-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
  }
}
