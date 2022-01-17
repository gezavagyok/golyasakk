import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { NgxChessgroundModule } from 'ngx-chessground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';
import { ToolbarmenuComponent } from './toolbarmenu/toolbarmenu.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module'
import { MaterialCalendarModule } from 'material-calendar';
import { LOCALE_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule} from '@angular/material/list'
import { MatDividerModule} from '@angular/material/divider';
import { LibraryComponent } from './library/library.component';
import { MatTableModule } from '@angular/material/table';
import { API_KEY, GoogleSheetsDbService} from 'ng-google-sheets-db';

@NgModule({
  declarations: [
    AppComponent,
    PuzzlesComponent, ChessboardComponent, NewsComponent,
    GalleryComponent, AboutusComponent, EventcalendarComponent,
    ToolbarmenuComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChessgroundModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, MatButtonModule, MatButtonToggleModule, AppRoutingModule,
    MaterialCalendarModule, MatCardModule, MatGridListModule, MatDividerModule, 
    MatListModule, MatTableModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'hu-HU' },
              { provide: API_KEY, useValue: 'AIzaSyDIFqbiUW5WN99BxOSgcWywSoZT7RGOZIg'},
            GoogleSheetsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
