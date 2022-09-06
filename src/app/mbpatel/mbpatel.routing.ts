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
];
