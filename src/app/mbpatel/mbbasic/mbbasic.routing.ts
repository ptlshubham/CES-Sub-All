import { Routes } from '@angular/router';
import { MbAboutComponent } from './mb-about/mb-about.component';
import { MbActivitiesComponent } from './mb-activities/mb-activities.component';
import { MbContactComponent } from './mb-contact/mb-contact.component';
import { MbFacilityComponent } from './mb-facility/mb-facility.component';
import { MbGalleryComponent } from './mb-gallery/mb-gallery.component';


export const MbBasicRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'about',
            component: MbAboutComponent
        },
        {
            path: 'facility',
            component: MbFacilityComponent
        },
        {
            path: 'activities',
            component: MbActivitiesComponent
        },
        {
            path: 'contact',
            component: MbContactComponent
        },
        {
            path: 'gallery',
            component: MbGalleryComponent
        }
    ]
}];
