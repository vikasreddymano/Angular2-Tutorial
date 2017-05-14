import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments = [];
  public isLoading:boolean;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.userService.fetchComments()
      .subscribe(comments => {
        this.comments = comments;
        this.isLoading = false;
      }); 
  }

}
