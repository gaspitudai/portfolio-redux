import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import ImageFeed from './models/image-feed.model';
import * as fromApp from './store/reducers/app-state.reducer'
// import * as fromCounterActions from './store/actions/counter.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  count$: Observable<{
    counter: number
  }>;
  image$: Observable<{
    imageView: ImageFeed
  }>;
  counter: number;
  image: ImageFeed;
  showImage: boolean;

  constructor(private store: Store<fromApp.AppState>) {
    this.count$ = this.store.pipe(select('counter'));
    this.image$ = this.store.pipe(select('imageView'));
  }

  ngOnInit(): void {
    this.count$.subscribe(_ => this.counter = _.counter);
    this.image$.subscribe(_ => this.showImage = _.imageView.show ? _.imageView.show : false);
  }

  // increment() {
  //   this.store.dispatch(new fromCounterActions.incrementCounter());
  // }

  // decrement() {
  //   this.store.dispatch(new fromCounterActions.decrementCounter());
  // }

  // reset() {
  //   this.store.dispatch(new fromCounterActions.resetCounter());
  // }

}
