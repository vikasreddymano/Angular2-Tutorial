import { Component, Input } from '@angular/core';


@Component({
    selector: 'list-view',
    templateUrl: 'list-view.component.html'
})
export class ListViewComponent {

    @Input('posts') postArray:Array<any>;
    public selectedPost:any;

    showPostBody( post ) {
        this.selectedPost = post;
    }

}