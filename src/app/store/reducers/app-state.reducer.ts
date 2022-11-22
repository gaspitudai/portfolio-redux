import { ActionReducerMap } from '@ngrx/store';
import * as fromImageViewReducer from './image.reducer';
import * as fromBackgroundReducer from './background.reducer';
import * as fromImagesCollectionReducer from './images-collection.reducer';
import * as fromWaitingScreenReducer from './waiting-screen.reducer';

export interface AppState {
    imageView: fromImageViewReducer.State;
    background: fromBackgroundReducer.State;
    imagesCollection: fromImagesCollectionReducer.State;
    waitingScreen: fromWaitingScreenReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    imageView: fromImageViewReducer.imageViewReducer,
    background: fromBackgroundReducer.backgroundReducer,
    imagesCollection: fromImagesCollectionReducer.imagesCollectionReducer,
    waitingScreen: fromWaitingScreenReducer.waitingScreenReducer,
};