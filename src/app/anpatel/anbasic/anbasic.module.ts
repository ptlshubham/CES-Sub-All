import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnBasicRoutes } from './anbasic.routing';
import { AnAboutComponent } from './an-about/an-about.component';
import { AnhomeModule } from '../anhome/anhome.module';
import { AnContactComponent } from './an-contact/an-contact.component';
import { AnGalleryComponent } from './an-gallery/an-gallery.component';
import { AnsharedModule } from '../anshared/anshared.module';
import { AnTrustComponent } from './an-trust/an-trust.component';
import { AnCommitteeComponent } from './an-committee/an-committee.component';



@NgModule({
  declarations: [
    AnAboutComponent,
    AnContactComponent,
    AnGalleryComponent,
    AnTrustComponent,
    AnCommitteeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnBasicRoutes),
    AnhomeModule,
    AnsharedModule
  ]
})
export class AnbasicModule { }
