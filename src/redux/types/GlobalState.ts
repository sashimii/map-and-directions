export enum Location {
  starting = 'starting',
  destination = 'destination',
}

export interface PredictionsStateType {
  [Location.starting]?: Array<any>;
  [Location.destination]?: Array<any>;
}

// Keep at end of file
export interface GlobalState {
  predictions: PredictionsStateType;
}
