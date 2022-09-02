import { Routes } from '@angular/router';
import { AnAboutComponent } from './an-about/an-about.component';
import { AnCommitteeComponent } from './an-committee/an-committee.component';
import { AnContactComponent } from './an-contact/an-contact.component';
import { AnGalleryComponent } from './an-gallery/an-gallery.component';
import { AnTrustComponent } from './an-trust/an-trust.component';

export const AnBasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'about',
        component: AnAboutComponent
    },
    {
        path: 'contact',
        component: AnContactComponent
    },
    {
        path: 'gallery',
        component: AnGalleryComponent
    },
    {
        path: 'trust',
        component: AnTrustComponent
    },
    {
        path: 'committee',
        component: AnCommitteeComponent
    },
    ]
}];
