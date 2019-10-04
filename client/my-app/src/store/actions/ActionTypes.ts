import { State, FilmsState, NormalizeData } from '../reducer/StateType';

export interface ActionTypeState {
    type: string;
    payload: State | NormalizeData;
}

export interface ActionTypeFilm {
    type: string;
    payload: FilmsState;
}

export type ActionType = ActionTypeState & ActionTypeFilm;