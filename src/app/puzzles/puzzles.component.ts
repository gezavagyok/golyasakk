import { Component, OnInit } from '@angular/core';
import { ChesscomService } from '../chesscom.service';
import { LichessService } from '../lichess.service';
import { IPuzzle } from '../puzzle';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {

  puzzles: IPuzzle[] = [];

  constructor(
    private lichess: LichessService,
    private chesscom: ChesscomService
    ) { }

  ngOnInit(): void {
    this.lichess.getPuzzle().subscribe(puzzle => this.puzzles.push(
      {
        isSolved: false,
        pgn: puzzle.game.pgn,
        provider: 'lichess.org',
        solution: puzzle.puzzle.solution
      }
    ));

    this.chesscom.getPuzzle().subscribe(puzzle => this.puzzles.push(
      {
        isSolved: false,
        pgn: puzzle.pgn,
        provider: 'chess.com',
        solution: puzzle.pgn.substring(puzzle.pgn.lastIndexOf('\n')).split(' ')
      }
    ));
  }

}
