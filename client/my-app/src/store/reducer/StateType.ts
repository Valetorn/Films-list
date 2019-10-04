export interface FilmsState {
    _id: string;
    name: string;
    year: number;
    _v: number;
    actors: string[];
}

export interface Actors {
    _id: string;
    name: string;
    age: number;
    oscars: number;
    _v: number;
}

export interface State {
    items: {
        entities: { 
          films: Record<string, FilmsState>;
          actors: Record<string, Actors>;
        }
        dataIsLoading: boolean;
        result: string[];
    }
}

export interface NormalizeData {
    entities: { 
        films: Record<string, FilmsState>;
        actors: Record<string, Actors>;
    }
    result: string[];
}