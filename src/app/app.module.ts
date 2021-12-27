import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';
import { ToolbarmenuComponent } from './toolbarmenu/toolbarmenu.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent, 
    PuzzlesComponent, ChessboardComponent, NewsComponent, 
    GalleryComponent, AboutusComponent, EventcalendarComponent, 
    ToolbarmenuComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChessgroundModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
