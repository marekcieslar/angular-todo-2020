import { DonePipe } from './../pipes/done.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DonePipe],
  imports: [
    CommonModule
  ],
  exports: [DonePipe]
})
export class SharedModule { }
