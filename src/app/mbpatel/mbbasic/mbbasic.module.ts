import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MbhomeModule } from "../mbhome/mbhome.module";
import { MbsharedModule } from "../mbshared/mbshared.module";
import { MbAboutComponent } from "./mb-about/mb-about.component";
import { MbBasicRoutes } from "./mbbasic.routing";
import { MbFacilityComponent } from './mb-facility/mb-facility.component';
import { MbActivitiesComponent } from './mb-activities/mb-activities.component';
import { MbContactComponent } from './mb-contact/mb-contact.component';
import { MbGalleryComponent } from './mb-gallery/mb-gallery.component';



@NgModule({
  declarations: [
    MbAboutComponent,
    MbFacilityComponent,
    MbActivitiesComponent,
    MbContactComponent,
    MbGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MbBasicRoutes),
    MbhomeModule,
    MbsharedModule
  ],
  exports:[
    MbAboutComponent
  ]
  
})
export class MbbasicModule { }
