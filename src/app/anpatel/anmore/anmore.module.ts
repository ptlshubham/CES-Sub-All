import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnMoreRoutes } from './anmore.routing';
import { AnhomeModule } from '../anhome/anhome.module';
import { AnsharedModule } from '../anshared/anshared.module';
import { AnSyllabusComponent } from './an-syllabus/an-syllabus.component';
import { AnPapersComponent } from './an-papers/an-papers.component';
import { AnResultComponent } from './an-result/an-result.component';



@NgModule({
  declarations: [
  
    AnSyllabusComponent,
       AnPapersComponent,
       AnResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnMoreRoutes),
    AnhomeModule,
    AnsharedModule
  ]
})
export class AnmoreModule { }
