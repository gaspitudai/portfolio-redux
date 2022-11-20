// import { createReducer, on } from '@ngrx/store';
import * as fromCounterReducer from '../actions/counter.actions';

export interface State {
    counter: number
}

const initialState: State = {
    counter: 0
};

export function counterReducer(state = initialState, action: fromCounterReducer.All) {
    switch (action.type) {
        case fromCounterReducer.INCREMENT_COUNTER: {
            return {
                counter: state.counter + 1
            }
        }
        case fromCounterReducer.DECREMENT_COUNTER: {
            return {
                counter: state.counter - 1
            }
        }
        case fromCounterReducer.RESET_COUNTER: {
            return {
                counter: 0
            }
        }
        default: {
            return {
                counter: state.counter
            }
        }
    }
}

// const _counterReducer = createReducer(state = initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1),
//     on(reset, state => 0),
// );