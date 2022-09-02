import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnmainComponent } from './anmain/anmain.component';
import { RouterModule } from '@angular/router';
import { AnHomeRoutes } from './anhome.routing';
import { AnsharedModule } from '../anshared/anshared.module';
import { AnHomeBannerComponent } from './an-home-banner/an-home-banner.component';
import { AnHomeSliderComponent } from './an-home-slider/an-home-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnLeftImageTextComponent } from './an-left-image-text/an-left-image-text.component';
import { AnRightImageTextComponent } from './an-right-image-text/an-right-image-text.component';
import { AnStatisticsIncrementorComponent } from './an-statistics-incrementor/an-statistics-incrementor.component';
import { AnSectionMessageComponent } from './an-section-message/an-section-message.component';
import { AnSectionCoursesComponent } from './an-section-courses/an-section-courses.component';
import { AnNewsSectionComponent } from './an-news-section/an-news-section.component';



@NgModule({
  declarations: [
    AnmainComponent,
    AnHomeBannerComponent,
    AnHomeSliderComponent,
    AnLeftImageTextComponent,
    AnRightImageTextComponent,
    AnStatisticsIncrementorComponent,
    AnSectionMessageComponent,
    AnSectionCoursesComponent,
    AnNewsSectionComponent
  ],
  imports: [
    CommonModule,
    AnsharedModule,
    RouterModule.forChild(AnHomeRoutes),
    NgbModule,
    CarouselModule
  ],
  exports:[
    AnmainComponent,
    AnHomeBannerComponent,
    AnHomeSliderComponent,
    AnLeftImageTextComponent,
    AnRightImageTextComponent,
    AnStatisticsIncrementorComponent,
    AnSectionMessageComponent,
    AnSectionCoursesComponent,
    AnNewsSectionComponent
  ]
})
export class AnhomeModule { }
