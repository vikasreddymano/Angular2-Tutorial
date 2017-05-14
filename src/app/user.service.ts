import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  fetchAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
      .map( resp => resp.json());
  }

  fetchComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
      .map( resp => resp.json());
  }

  fetchPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map( resp => resp.json());
  }

}
