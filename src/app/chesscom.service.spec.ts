import { TestBed } from '@angular/core/testing';

import { ChesscomService } from './chesscom.service';

describe('ChesscomService', () => {
  let service: ChesscomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChesscomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
