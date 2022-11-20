import { Component, OnInit } from '@angular/core';
import { ESection } from 'src/app/models/section.enum';

interface Button {
  name: string;
  active?: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  buttons: Button[] = [
    { name: ESection.WORKS, },
    { name: ESection.ABOUT, },
    { name: ESection.CONTACT, }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToSection(btnName: string) {
    this.buttons.map(btn => btn.active = btn.name === btnName ? true : false);
  }

}
