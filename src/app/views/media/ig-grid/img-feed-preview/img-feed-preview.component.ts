import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ImageFeed from 'src/app/models/image-feed.model';
import * as fromImageViewActions from 'src/app/store/actions/image.actions';
import * as fromApp from 'src/app/store/reducers/app-state.reducer';

@Component({
  selector: 'app-img-feed-preview',
  templateUrl: './img-feed-preview.component.html',
  styleUrls: ['./img-feed-preview.component.sass']
})
export class ImgFeedPreviewComponent implements OnInit {

  @Input() img: ImageFeed;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
  }

  onShowImg(): void {
    this.store.dispatch(new fromImageViewActions.showImage(this.img));
  }

}
