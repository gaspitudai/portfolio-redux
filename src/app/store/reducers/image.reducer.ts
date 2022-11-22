import ImageFeed from 'src/app/models/image-feed.model';
import * as fromImageViewActions from '../actions/image.actions';

export interface State {
    imageView: ImageFeed
}

const initialState: State = {
    imageView: {
        src: null,
        show: false,
        // src: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg',
        // show: true
    },
};

export function imageViewReducer(
    state = initialState,
    action: fromImageViewActions.All
): State {
    let payload = action.payload;
    switch (action.type) {
        case fromImageViewActions.SET_IMG_URL: {
            return {
                imageView: {
                    src: payload.src,
                    show: false,
                }
            }
        }
        case fromImageViewActions.SHOW_IMG: {
            return {
                imageView: {
                    src: payload.src,
                    show: true,
                }
            }
        }
        case fromImageViewActions.HIDE_IMG: {
            return {
                imageView: {
                    src: null,
                    show: false,
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