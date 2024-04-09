import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) {}
  
  postComment (name:string,comment:string){
    return this.http.post('https://sights-comments-default-rtdb.europe-west1.firebasedatabase.app/.json',{ name, comment}); 
  }

  getComments (){
    return this.http.get<any>('https://sights-comments-default-rtdb.europe-west1.firebasedatabase.app/.json'); 
  }
}
