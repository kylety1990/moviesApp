import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPipe } from './img.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [ImgPipe, ParesPipe],
  imports: [
    CommonModule
  ],
  exports: [ImgPipe, ParesPipe]
})
export class PipesModule { }
