import { createReducer, on } from '@ngrx/store';
import { show, hide } from '../actions/viewer.actions';

export const initialState = false;

const _viewerReducer = createReducer(initialState,
    on(show, state => state = true),
    on(hide, state => state = false),
);

export function viewerReducer(state, action) {
    return _viewerReducer(state, action);
}