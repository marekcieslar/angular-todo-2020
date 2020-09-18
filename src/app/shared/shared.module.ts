import { DoneDirective } from './../directives/done.directive';
import { DonePipe } from './../pipes/done.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DonePipe, DoneDirective],
  imports: [CommonModule],
  exports: [DonePipe, DoneDirective],
})
export class SharedModule {}
