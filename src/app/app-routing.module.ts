import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: '', redirectTo: 'hirek', pathMatch: 'full' },
  { path: 'hirek', component: NewsComponent},
  { path: 'kepek', component: GalleryComponent},
  { path: 'elerhetoseg', component: AboutusComponent},
  { path: 'konyvtar', component: LibraryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
