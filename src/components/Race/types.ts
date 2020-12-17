export type CorrectWorsType = number[];

export enum GameStateEnum {
    init = "The race is about to start.",
    play = "Go!",
    end = "The race has ended.",
}
export interface RaceProps {
    addToAVG: (wpm: number) => void;
}

export interface EndRaceProps {
    restartGame: (text: string) => void;
    currentText: string;
    nextText: string;
}
