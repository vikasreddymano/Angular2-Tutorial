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

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HighlightDirective,
    PostsComponent,
    ListViewComponent,
    LimitPipe,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
