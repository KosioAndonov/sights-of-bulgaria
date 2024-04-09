import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit {
  commentsArr: any = [];
  constructor(private commentsService: CommentsService){}

  ngOnInit() {
    this.commentsService.getComments().subscribe(
    (data) => {
      this.commentsArr = Object.values(data);
      
    },
   );
   
  }
}
