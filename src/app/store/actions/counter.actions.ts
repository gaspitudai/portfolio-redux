import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER = '[Counter Component] Increment';
export const DECREMENT_COUNTER = '[Counter Component] Decrement';
export const RESET_COUNTER = '[Counter Component] Reset';

// export const _incrementCounter = createAction(INCREMENT_COUNTER);
// export const _decrementCounter = createAction(DECREMENT_COUNTER);
// export const _resetCounter = createAction(RESET_COUNTER);

export class incrementCounter implements Action {
    readonly type = INCREMENT_COUNTER;
    constructor() { }
}

export class decrementCounter implements Action {
    readonly type = DECREMENT_COUNTER;
    constructor() { }
}

export class resetCounter implements Action {
    readonly type = RESET_COUNTER;
    constructor() { }
}

export type All = incrementCounter | decrementCounter | resetCounter;