import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  prefixText = 'Super TODO app created by: ';
  url = 'https://marekcieslar.pl';
  urlText = 'Marek';
  postfixText = '. Thanks for visiting!';

  constructor() {}
}
