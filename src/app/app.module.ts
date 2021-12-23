import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';

@NgModule({
  declarations: [
    AppComponent, 
    PuzzlesComponent, ChessboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChessgroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
