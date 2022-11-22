import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import ImageFeed from 'src/app/models/image-feed.model';
import * as fromApp from '../../../store/reducers/app-state.reducer';

@Component({
  selector: 'app-ig-grid',
  templateUrl: './ig-grid.component.html',
  styleUrls: ['./ig-grid.component.sass']
})
export class IgGridComponent implements OnInit {

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

}
