import { Component, OnInit } from '@angular/core';

export interface Link {
  path: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'menu';

  links: Link[] = [
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/todo',
      text: 'TODO',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
