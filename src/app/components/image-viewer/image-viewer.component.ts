import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import ImageFeed from 'src/app/models/image-feed.model';
import * as fromApp from '../../store/reducers/app-state.reducer';
import * as fromImageViewActions from '../../store/actions/image.actions';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.sass']
})
export class ImageViewerComponent implements OnInit {

  image: ImageFeed;
  image$: Observable<{
    imageView: ImageFeed
  }>;

  constructor(private store: Store<fromApp.AppState>) {
    this.image$ = this.store.pipe(select('imageView'));
  }
  
  ngOnInit(): void {
    this.image$.subscribe(_ => {
      this.image = _.imageView;
    });
  }

  hideImage(): void {
    this.store.dispatch(new fromImageViewActions.hideImage(this.image));
  }

}
