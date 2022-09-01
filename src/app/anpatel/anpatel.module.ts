import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnsharedModule } from './anshared/anshared.module';
import { AnhomeModule } from './anhome/anhome.module';
import { RouterModule } from '@angular/router';
import { AnPatelRoutes } from './anpatel.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnsharedModule,
    AnhomeModule,
    RouterModule.forChild(AnPatelRoutes)
  ]
})
export class AnpatelModule { }
