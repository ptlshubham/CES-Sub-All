import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnDepartmentRoutes } from './andepartment.routing';
import { AnhomeModule } from '../anhome/anhome.module';
import { AnsharedModule } from '../anshared/anshared.module';
import { AnChemistryComponent } from './an-chemistry/an-chemistry.component';



@NgModule({
  declarations: [
    AnChemistryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnDepartmentRoutes),
    AnhomeModule,
    AnsharedModule
  ]
})
export class AndepartmentModule { }
