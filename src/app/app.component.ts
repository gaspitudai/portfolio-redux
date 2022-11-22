import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import ImageFeed from './models/image-feed.model';
import * as fromApp from './store/reducers/app-state.reducer'
import * as fromBackgroundActions from './store/actions/background.actions';
import * as fromWaitingScreenActions from './store/actions/waiting-screen.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  waitingState: Observable<{
    counter: number;
  }>;
  counter: number;
  image$: Observable<{
    imageView: ImageFeed
  }>;
  image: ImageFeed;
  showImage: boolean;
  controller: any;

  constructor(private store: Store<fromApp.AppState>) {
    this.image$ = this.store.pipe(select('imageView'));
    this.waitingState = this.store.select('waitingScreen'); 
  }

  ngOnInit(): void {
    // this.waitingState.subscribe(_ => this.counter = _.counter);
    // this.store.dispatch(new fromWaitingScreenActions.incrementCounter());
    // setTimeout(() => this.store.dispatch(new fromWaitingScreenActions.decrementCounter()), 5000);
    
    this.image$.subscribe(_ => this.showImage = _.imageView.show ? _.imageView.show : false);
    // this.store.dispatch(new fromBackgroundActions.setBackground('00ff8c')); // verde
    this.store.dispatch(new fromBackgroundActions.setBackground('1880ce')); // azul
    // this.store.dispatch(new fromBackgroundActions.setBackground('fe94c7')); // rosa
    this.store.dispatch(new fromBackgroundActions.setOpacity(.9));
  }

}
