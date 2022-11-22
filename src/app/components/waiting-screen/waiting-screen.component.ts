import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-screen',
  templateUrl: './waiting-screen.component.html',
  styleUrls: ['./waiting-screen.component.sass']
})
export class WaitingScreenComponent implements OnInit {

  @Input() counter: number;
  @Input() show: boolean;
  @Input() config: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
