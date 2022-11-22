import * as fromWaitingScreenActions from '../actions/waiting-screen.action';

export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
};

export function waitingScreenReducer(
  state = initialState,
  action: fromWaitingScreenActions.All
) {
  switch (action.type) {
    case fromWaitingScreenActions.INCREMENT_COUNTER: {
      return {
        counter: state.counter + 1
      };
    }
    case fromWaitingScreenActions.DECREMENT_COUNTER: {
      if (state.counter == 0)
        console.log("Invalid decrement");
      return {
        counter: state.counter - 1
      };
    }
    default: {
      return state;
    }
  }
}