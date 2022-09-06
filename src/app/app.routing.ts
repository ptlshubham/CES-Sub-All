import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'main/home',
        pathMatch: 'full',
    },
    {
        path: 'anpatel',
        loadChildren: () => import('./anpatel/anpatel.module').then(m => m.AnpatelModule)
    },
    {
        path: 'mbpatel',
        loadChildren: () => import('./mbpatel/mbpatel.module').then(m => m.MbpatelModule)
    },


];
