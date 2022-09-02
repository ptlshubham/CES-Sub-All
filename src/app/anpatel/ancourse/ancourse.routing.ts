import { Routes } from '@angular/router';
import { AnParamedicalComponent } from './an-paramedical/an-paramedical.component';
import { AnScienceComponent } from './an-science/an-science.component';

export const AnCourseRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'science',
        component: AnScienceComponent
    },
    {
        path: 'para',
        component: AnParamedicalComponent
    },
    ]
}];
