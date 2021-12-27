import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LichessPuzzle } from 'src/app/lichesspuzzle';

@Injectable({
  providedIn: 'root'
})
export class LichessService {
  private lichessUrl = 'https://lichess.org/api/puzzle/daily';

  constructor(private http: HttpClient) { }

  getPuzzle(): Observable<LichessPuzzle> {
    return this.http.get<LichessPuzzle> (this.lichessUrl);
  }

}
