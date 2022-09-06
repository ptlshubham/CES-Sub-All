import { Routes } from '@angular/router';
import { MbAboutComponent } from './mb-about/mb-about.component';

export const MbBasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'about',
        component: MbAboutComponent
    },
    ]
}];
