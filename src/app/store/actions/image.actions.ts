import { Action } from '@ngrx/store';
import ImageFeed from 'src/app/models/image-feed.model';

export const SET_IMG_URL = '[ImageViewer Component] SetImageUrl';
export const SHOW_IMG = '[ImageViewer Component] ShowImage';
export const HIDE_IMG = '[ImageViewer Component] HideImage';

export class setImageUrl implements Action {
    readonly type = SET_IMG_URL;
    constructor(public payload: ImageFeed) { }
}

export class showImage implements Action {
    readonly type = SHOW_IMG;
    constructor(public payload: ImageFeed) { }
}

export class hideImage implements Action {
    readonly type = HIDE_IMG;
    constructor(public payload: ImageFeed) { }
}

export type All = setImageUrl | showImage | hideImage;