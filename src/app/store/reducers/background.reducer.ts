import BackgroundModel from 'src/app/models/background.model';
import * as fromBackgroundActions from '../actions/background.actions';

export interface State {
    background: BackgroundModel
}

const initialState: State = {
    background: {
        width: 600,
        height: 600,
        viewBox: 600,
        fill: '222',
        fillOpacity: 1,
    }
};

export function backgroundReducer(
    state = initialState,
    action: fromBackgroundActions.All
): State {
    switch (action.type) {
        case fromBackgroundActions.SET_FILL: {
            if (action.payload) {
                console.log(action.payload)
                const bg: BackgroundModel = {
                    ...state,
                    fill: action.payload
                }
                return {
                    ...state,
                    background: bg
                }
            } else {
                console.log(2)
                return state;
            }
        }
        case fromBackgroundActions.SET_OPACITY: {
            const bg: BackgroundModel = {
                ...state,
                fillOpacity: action.payload
            }
            return {
                ...state,
                background: bg
            }
        }
        default: {
            return state;
        }
    }
}