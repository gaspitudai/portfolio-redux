import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export class incrementCounter implements Action {
    readonly type = INCREMENT_COUNTER;
    constructor() { }
}

export class decrementCounter implements Action {
    readonly type = DECREMENT_COUNTER;
    constructor() { }
}

export type All = incrementCounter | decrementCounter;