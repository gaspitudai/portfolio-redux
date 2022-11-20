import ImageFeed from 'src/app/models/image-feed.model';
import * as fromImageViewReducer from '../actions/image.actions';

export interface State {
    imageView: ImageFeed
}

const initialState: State = {
    imageView: {
        src: null,
    },
};

export function imageViewReducer(
    state = initialState,
    action: fromImageViewReducer.All
): State {
    let payload = action.payload;
    switch (action.type) {
        case fromImageViewReducer.SET_IMG_URL: {
            return {
                imageView: {
                    src: payload.src,
                }
            }
        }
        case fromImageViewReducer.SHOW_IMG: {
            return {
                imageView: {
                    src: payload.src,
                    show: true,
                }
            }
        }
        case fromImageViewReducer.HIDE_IMG: {
            return {
                imageView: {
                    src: null,
                }
            }
        }
        default: {
            return {
                imageView: state.imageView
            }
        }
    }
}