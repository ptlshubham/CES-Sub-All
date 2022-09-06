import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MbBasicRoutes } from './mbbasic.routing';
import { MbAboutComponent } from './mb-about/mb-about.component';
import { MbhomeModule } from '../mbhome/mbhome.module';
import { MbsharedModule } from '../mbshared/mbshared.module';



@NgModule({
  declarations: [
    MbAboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MbBasicRoutes),
    MbhomeModule,
    MbsharedModule
  ]
})
export class MbbasicModule { }
