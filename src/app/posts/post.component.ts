import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'rxjs';

@Component({
    selector: 'posts',
    template: `
        <table class="table table-striped">
            <thead>
                <th>Title</th>
                <th>Comment</th>
            </thead>
            <tbody>
                <tr *ngFor="let post of posts | limit" (click)="showDetails(post)">
                    <td>{{post.title}}</td>
                    <td>{{post.body}}</td>
                </tr>
            </tbody>
        </table>
    `
})
export class PostsComponent {

    @Input() posts:any;
    @Output() viewDetails = new EventEmitter();

    showDetails( post ) {
        this.viewDetails.emit(post);
    }
}

