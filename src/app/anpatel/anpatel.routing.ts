import { Routes } from '@angular/router';

export const AnPatelRoutes: Routes = [{
    path: '',
    redirectTo: 'anhome/anmain',
    pathMatch: 'full',
},
{
    path: 'home',
    loadChildren: () => import('./anhome/anhome.module').then(m => m.AnhomeModule)
},];
