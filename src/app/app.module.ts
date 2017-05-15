import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/course.component';
import { HighlightDirective } from './directives/input-grow.directive';
import { PostsComponent } from './posts/post.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LimitPipe, TitleCasePipe } from './pipes/limit.pipe';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule } from './app.routing';
import { AlbumsComponent } from './albums/albums.component';
import { UserService } from './user.service';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HighlightDirective,
    PostsComponent,
    ListViewComponent,
    LimitPipe,
    TitleCasePipe,
    CommentsComponent,
    PhotosComponent,
    AlbumsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
