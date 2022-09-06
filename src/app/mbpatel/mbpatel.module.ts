import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbhomeModule } from './mbhome/mbhome.module';
import { RouterModule } from '@angular/router';
import { MbPatelRoutes } from './mbpatel.routing';
import { MbsharedModule } from './mbshared/mbshared.module';
import { MbbasicModule } from './mbbasic/mbbasic.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    MbhomeModule,
    MbsharedModule,
    MbbasicModule,
    RouterModule.forChild(MbPatelRoutes)
  ]
})
export class MbpatelModule { }
