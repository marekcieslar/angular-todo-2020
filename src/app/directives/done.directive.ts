import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDone]',
})
export class DoneDirective implements OnInit {
  @HostBinding('style.text-decoration') textDecoration = '';
  @HostBinding('style.color') color: string;

  @Input() isDone: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.isDone);
    // if (this.isDone) {
    this.textDecoration = 'line-through';
    this.color = 'pink';
    // }
  }
}
