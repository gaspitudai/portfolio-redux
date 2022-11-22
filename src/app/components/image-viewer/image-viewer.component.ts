import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import ImageFeed from 'src/app/models/image-feed.model';
import * as fromApp from '../../store/reducers/app-state.reducer';
import * as fromImageViewActions from '../../store/actions/image.actions';
import * as fromImagesCollectionActions from '../../store/actions/images-collection.actions';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.sass']
})
export class ImageViewerComponent implements OnInit {

  image$: Observable<{
    imageView: ImageFeed
  }>;
  images$: Observable<{
    imagesCollection: ImageFeed[]
  }>;
  image: ImageFeed;
  imagesCollection: ImageFeed[];

  constructor(private store: Store<fromApp.AppState>) {
    this.image$ = this.store.pipe(select('imageView'));
    this.images$ = this.store.select('imagesCollection');
  }

  ngOnInit(): void {
    this.image$.subscribe(_ => this.image = _.imageView);
    this.images$.subscribe(_ => this.imagesCollection = _.imagesCollection);
  }

  hideImage(): void {
    this.store.dispatch(new fromImageViewActions.hideImage(this.image));
  }

  next(): void {
    let _index: number;
    let imgColl: ImageFeed[] = [...this.imagesCollection];
    console.log(imgColl)
    imgColl.map((image: ImageFeed, index) => {
      if (image.show) {
        image.show = false;
        image.src = null;
        _index = index;
      }
    });
    // imgColl.map((image: ImageFeed, index) => {
    //   if (index + 1 === _index) {
    //     image.show = true;
    //     image.src = this.image.src;
    //   }
    // });
    this.store.dispatch(new fromImagesCollectionActions.nextImage(imgColl));
    this.store.dispatch(new fromImageViewActions.showImage(imgColl[_index + 1]));
  }

  previous(): void {
    this.store.dispatch(new fromImagesCollectionActions.previousImage(Array(this.image)));
  }

}
