import { Action } from '@ngrx/store';
import ImageFeed from 'src/app/models/image-feed.model';

export const SET_IMAGES_COLLECTION = '[ImageViewer Component] SetImagesCollection';
export const NEXT_IMG = '[ImageViewer Component] NextImage';
export const PREV_IMG = '[ImageViewer Component] PreviousImage';

export class setImagesCollection implements Action {
    readonly type = SET_IMAGES_COLLECTION;
    constructor(public payload: ImageFeed[]) { }
}

export class nextImage implements Action {
    readonly type = NEXT_IMG;
    constructor(public payload: ImageFeed[]) { }
}

export class previousImage implements Action {
    readonly type = PREV_IMG;
    constructor(public payload: ImageFeed[]) { }
}

export type All = setImagesCollection | nextImage | previousImage;