import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnCourseRoutes } from './ancourse.routing';
import { AnhomeModule } from '../anhome/anhome.module';
import { AnsharedModule } from '../anshared/anshared.module';
import { AnScienceComponent } from './an-science/an-science.component';
import { AnParamedicalComponent } from './an-paramedical/an-paramedical.component';



@NgModule({
  declarations: [
    AnScienceComponent,
    AnParamedicalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnCourseRoutes),
    AnhomeModule,
    AnsharedModule
  ]
})
export class AncourseModule { }
