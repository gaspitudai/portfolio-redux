import { Action } from '@ngrx/store';

export const SET_FILL = '[Background Component] SetFill';
export const SET_OPACITY = '[Background Component] SetOpacity';

export class setBackground implements Action {
    readonly type = SET_FILL;
    constructor(public payload: string = null) { }
}

export class setOpacity implements Action {
    readonly type = SET_OPACITY;
    constructor(public payload: number) { }
}

export type All = setBackground | setOpacity;