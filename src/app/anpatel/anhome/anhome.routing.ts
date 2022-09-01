import { Routes } from '@angular/router';
import { AnmainComponent } from './anmain/anmain.component';

export const AnHomeRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'main',
        component: AnmainComponent
    },
    ]
}];
