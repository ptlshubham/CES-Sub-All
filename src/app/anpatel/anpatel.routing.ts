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
{
    path: 'department',
    loadChildren: () => import('./andepartment/andepartment.module').then(m => m.AndepartmentModule)
},
{
    path: 'more',
    loadChildren: () => import('./anmore/anmore.module').then(m => m.AnmoreModule)
},
{
    path: 'gallery',
    loadChildren: () => import('./angallery/angallery.module').then(m => m.AngalleryModule)
},
];
