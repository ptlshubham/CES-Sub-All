import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnPhotosComponent } from './an-photos/an-photos.component';
import { AnGalleryRoutes } from './angallery.routing';
import { RouterModule } from '@angular/router';
import { AnhomeModule } from '../anhome/anhome.module';
import { AnsharedModule } from '../anshared/anshared.module';



@NgModule({
  declarations: [
    AnPhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnGalleryRoutes),
    AnhomeModule,
    AnsharedModule
  ]
})
export class AngalleryModule { }
