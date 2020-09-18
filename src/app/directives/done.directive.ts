import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDone]',
})
export class DoneDirective implements OnInit {
  @HostBinding('style.text-decoration') textDecoration = '';
  @HostBinding('innerText') innerText: string;

  @Input() isDone: boolean;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {
    if (this.isDone) {
      this.textDecoration = 'line-through';
      this.innerText = `:) ${this.text} (:`;
    } else {
      this.innerText = `${this.text}`;
    }
  }
}
