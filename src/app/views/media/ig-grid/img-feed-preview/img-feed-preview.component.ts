import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import ImageFeed from 'src/app/models/image-feed.model';
import * as fromImageViewActions from 'src/app/store/actions/image.actions';
// import * as fromImagesCollectionActions from 'src/app/store/actions/images-collection.actions';
import * as fromApp from 'src/app/store/reducers/app-state.reducer';

@Component({
  selector: 'app-img-feed-preview',
  templateUrl: './img-feed-preview.component.html',
  styleUrls: ['./img-feed-preview.component.sass']
})
export class ImgFeedPreviewComponent implements OnInit {

  @Input() img: ImageFeed;
  images$: Observable<{
    imagesCollection: ImageFeed[]
  }>;
  imagesCollection: ImageFeed[];

  constructor(private store: Store<fromApp.AppState>) {
    this.images$ = this.store.select('imagesCollection');
  }

  ngOnInit(): void {
    this.images$.subscribe(_ => this.imagesCollection = _.imagesCollection);
  }

  onShowImg(): void {
    this.store.dispatch(new fromImageViewActions.showImage(this.img));
    // let _index: number;
    // this.imagesCollection.map((image: ImageFeed, index) => {
    //   if (image.src === this.img.src) {
    //     _index = index;
    //   }
    // });
    // this.store.dispatch(new fromImagesCollectionActions.setImagesCollection(this.imagesCollection));
  }

}
