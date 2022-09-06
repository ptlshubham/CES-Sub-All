import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbmainComponent } from './mbmain/mbmain.component';
import { MbHomeRoutes } from './mbhome.routing';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MbHomeSliderComponent } from './mb-home-slider/mb-home-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MbsharedModule } from '../mbshared/mbshared.module';
import { MbLeftImageTextComponent } from './mb-left-image-text/mb-left-image-text.component';
import { MbSectionMessageComponent } from './mb-section-message/mb-section-message.component';
import { MbRightImageTextComponent } from './mb-right-image-text/mb-right-image-text.component';
import { MbSectionCoursesComponent } from './mb-section-courses/mb-section-courses.component';
import { MbHomeBannerComponent } from './mb-home-banner/mb-home-banner.component';
import { MbStatisticsIncrementorComponent } from './mb-statistics-incrementor/mb-statistics-incrementor.component';


@NgModule({
  declarations: [
    MbmainComponent,
    MbHomeSliderComponent,
    MbLeftImageTextComponent,
    MbSectionMessageComponent,
    MbRightImageTextComponent,
    MbSectionCoursesComponent,
    MbHomeBannerComponent,
    MbStatisticsIncrementorComponent,
  ],
  imports: [
    CommonModule,
    MbsharedModule,
    RouterModule.forChild(MbHomeRoutes),
    NgbModule,
    CarouselModule
  ],
  exports:[
    MbmainComponent,
    MbHomeSliderComponent,
    MbHomeBannerComponent,
    MbLeftImageTextComponent,
    MbRightImageTextComponent,
    MbStatisticsIncrementorComponent,
    MbSectionMessageComponent,
    MbSectionCoursesComponent,
  ]
})
export class MbhomeModule { }
