import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos = [];
  public isLoading:boolean;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.userService.fetchPhotos()
      .subscribe(photos => {
        this.photos = photos;
        this.isLoading = false;
      }); 
  }

}
