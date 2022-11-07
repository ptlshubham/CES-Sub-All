import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MbhomeModule } from '../mbhome/mbhome.module';
import { MbsharedModule } from '../mbshared/mbshared.module';
import { MbGalleryRoutes } from './mbgallery.routing';
import { MbPhotosComponent } from './mb-photos/mb-photos.component';



@NgModule({
  declarations: [
    MbPhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MbGalleryRoutes),
    MbhomeModule,
    MbsharedModule
  ]
})
export class MbgalleryModule { }
