import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import BackgroundModel from 'src/app/models/background.model';
import Background from './background.componment';
import * as fromApp from '../../store/reducers/app-state.reducer';
import * as fromBackgroundReducer from '../../store/reducers/background.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('mainContent') mainContent: ElementRef;
  @ViewChild('gradient') gradient: ElementRef;
  bg: Background = new Background();
  color: number;
  background$: Observable<{
    background: BackgroundModel
  }>;

  constructor(private store: Store<fromApp.AppState>) {
    this.background$ = this.store.select('background');
    this.background$.subscribe(_ => {
      this.bg.setBg({
        width: _.background.width,
        height: _.background.height,
        viewBox: _.background.viewBox,
        fill: _.background.fill,
        fillOpacity: _.background.fillOpacity,
      });
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setBackground();
  }

  ngOnChanges(): void {
    this.setBackground();
  }

  setBackground(): void {
    this.mainContent.nativeElement
      .setAttribute(
        'style',
        `background-image: url("${this.bg.getBg()}")`
      );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let offset = window.pageYOffset;
    this.mainContent.nativeElement.style.backgroundPositionY = `${offset * 0.3}px`;
    this.gradient.nativeElement
      .setAttribute(
        'style',
        `background: linear-gradient(313deg, rgb(${126 - offset} 0 ${78 - offset}), transparent)`
      );
  }

}
