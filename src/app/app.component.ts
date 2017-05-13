import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular2!';

  public postList:Array<any>=[];
  public activeView:string;
  public selectedPost:any;

  constructor(private http:Http) {}

  ngOnInit() {
    this.getPosts();
  }

  toggleView( viewName ) {
    this.activeView = viewName;
  }

  receivedPost( post ) {
    console.log('Post : ', post);
    this.selectedPost = post;
  }

  getPosts() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map( resp => resp.json())
            .subscribe( posts => this.postList = posts)
    }

}
