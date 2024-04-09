import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommentsService } from '../comments.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.css'
})
export class NewReviewComponent implements OnInit{
  constructor(private commentsService: CommentsService, private router: Router) { }

  submitReview(form: NgForm): void {
      
      const { name, message } = form.value;

      this.commentsService.postComment(name, message).subscribe();
      this.router.navigate(['/community']);
  }

  ngOnInit(): void {
    const isLogged = localStorage.getItem('LoggedIn');
    if(isLogged !== 'true'){
      this.router.navigate(['/auth/login']);
      throw alert(new Error('Must Logged In to Access This Page!')); 

    }
  }
}
