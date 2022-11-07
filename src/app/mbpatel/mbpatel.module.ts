import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbhomeModule } from './mbhome/mbhome.module';
import { RouterModule } from '@angular/router';
import { MbPatelRoutes } from './mbpatel.routing';
import { MbsharedModule } from './mbshared/mbshared.module';
import { MbbasicModule } from './mbbasic/mbbasic.module';
import { MbdepartmentModule } from './mbdepartment/mbdepartment.module';
import { MbgalleryModule } from './mbgallery/mbgallery.module';



@NgModule({
  declarations: [

  
  ],
  imports: [
    CommonModule,
    MbhomeModule,
    MbsharedModule,
    MbbasicModule,
    MbdepartmentModule,
    MbgalleryModule,
    RouterModule.forChild(MbPatelRoutes)
  ]
})
export class MbpatelModule { }
