import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

}
