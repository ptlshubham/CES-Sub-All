import { Routes } from '@angular/router';

export const MbPatelRoutes: Routes = [{
    path: '',
    redirectTo: 'mbhome/mbmain/',
    pathMatch: 'full',
},
{
    path: 'home',
    loadChildren: () => import('./mbhome/mbhome.module').then(m => m.MbhomeModule)
},
{
    path: 'basic',
    loadChildren: () => import('./mbbasic/mbbasic.module').then(m => m.MbbasicModule)
},
{
    path: 'department',
    loadChildren: () => import('./mbdepartment/mbdepartment.module').then(m => m.MbdepartmentModule)
},
{
    path: 'more',
    loadChildren: () => import('./mbmore/mbmore.module').then(m => m.MbmoreModule)
},
{
    path: 'gallery',
    loadChildren: () => import('./mbgallery/mbgallery.module').then(m => m.MbgalleryModule)
}
];
