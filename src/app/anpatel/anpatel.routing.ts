import { Routes } from '@angular/router';

export const AnPatelRoutes: Routes = [{
    path: '',
    redirectTo: 'anhome/anmain/',
    pathMatch: 'full',
},
{
    path: 'home',
    loadChildren: () => import('./anhome/anhome.module').then(m => m.AnhomeModule)
},
{
    path: 'basic',
    loadChildren: () => import('./anbasic/anbasic.module').then(m => m.AnbasicModule)
},
{
    path: 'course',
    loadChildren: () => import('./ancourse/ancourse.module').then(m => m.AncourseModule)
},
{
    path: 'inf',
    loadChildren: () => import('./aninfrastructure/aninfrastructure.module').then(m => m.AninfrastructureModule)
},
];
