import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-albums',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let album of albums">{{album.title}}</li>
    </ul>
    <div class="loader" *ngIf="isLoading">
      <i class="fa fa-spinner fa-3x" aria-hidden="true"></i>
    </div>
  `,
})
export class AlbumsComponent implements OnInit {

  public albums = [];
  public isLoading:boolean;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.userService.fetchAlbums()
      .subscribe( resp => {
        this.albums = resp;
        this.isLoading = false;
      });
  }


}
