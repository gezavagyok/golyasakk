import { Injectable } from '@angular/core';
import { ChesscomPuzzle } from 'src/chesscompuzzle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChesscomService {
  private chesscomUrl = 'https://api.chess.com/pub/puzzle';

  constructor(private http: HttpClient) { }

  getPuzzle(): Observable<ChesscomPuzzle> {
    return this.http.get<ChesscomPuzzle> (this.chesscomUrl);
  }

}
