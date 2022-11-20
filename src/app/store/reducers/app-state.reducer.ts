import { ActionReducerMap } from '@ngrx/store';
import * as fromImageViewReducer from './image.reducer';
import * as fromCounterReducer from './counter.reducer';

export interface AppState {
    imageView: fromImageViewReducer.State;
    counter: fromCounterReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    imageView: fromImageViewReducer.imageViewReducer,
    counter: fromCounterReducer.counterReducer,
};