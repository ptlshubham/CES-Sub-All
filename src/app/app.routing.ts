import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'landing/main',
        pathMatch: 'full',
    },
    {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
    },
    {
        path: 'academic',
        loadChildren: () => import('./academic/academic.module').then(m => m.AcademicModule)
    },
    {
        path: 'glory',
        loadChildren: () => import('./glory/glory.module').then(m => m.GloryModule)
    },
    {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
    },
    {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'anpatel',
        loadChildren: () => import('./anpatel/anpatel.module').then(m => m.AnpatelModule)
    },


];
