
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes:Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full'},
    { path: 'albums', component: AlbumsComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'contact', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}