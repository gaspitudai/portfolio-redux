import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers/app-state.reducer';
import * as fromBackgroundActions from '../../store/actions/background.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @ViewChild('avatarContainer') avatarContainer: ElementRef;
  @ViewChild('imgAvatar1') imgAvatar1: ElementRef;
  @ViewChild('imgAvatar2') imgAvatar2: ElementRef;
  @ViewChild('avatarCenter') avatarCenter: ElementRef;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

  }

  changeBgColor(mouseenter = false): void {
    if (mouseenter) {
      this.store.dispatch(new fromBackgroundActions.setBackground('fff'));
    } else {
      this.store.dispatch(new fromBackgroundActions.setBackground());
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let offset = window.pageYOffset;
    this.avatarContainer.nativeElement.setAttribute('style',
      `margin-top: ${offset * 1.3}px`
    );
    this.imgAvatar1.nativeElement.setAttribute('style', `
        height: calc(100% + ${offset}px);
        opacity: calc(100% - ${offset + 10}%)`
        );
    this.imgAvatar2.nativeElement.setAttribute('style',
        `height: calc(100% + ${offset}px)`
    );
    // this.avatarCenter.nativeElement.setAttribute('style', `
    //   width: ${250 - offset}px;
    //   height: ${250 - offset}px`
    // );
  }

}
