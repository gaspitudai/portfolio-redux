import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Background from './background.componment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mainContent') mainContent: ElementRef;
  bg: Background = new Background();
  color: number;

  constructor() {
    this.bg.setBg({
      width: 600,
      height: 600,
      viewBox: 600,
      fill: 'FFF000',
      fillOpacity: 1,
    });
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.mainContent.nativeElement.setAttribute('style', `background-image: url("${this.bg.getBg()}")`);
  }

}
