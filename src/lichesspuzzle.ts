export interface LichessPuzzle {
    game:   Game;
    puzzle: Puzzle;
}

export interface Game {
    clock:   string;
    id:      string;
    perf:    Perf;
    pgn:     string;
    players: Player[];
    rated:   boolean;
}

export interface Perf {
    icon: string;
    name: string;
}

export interface Player {
    color:  string;
    name:   string;
    userId: string;
}

export interface Puzzle {
    id:         string;
    initialPly: number;
    plays:      number;
    rating:     number;
    solution:   string[];
    themes:     string[];
}