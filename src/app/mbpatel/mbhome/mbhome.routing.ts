import { Routes } from '@angular/router';
import { MbmainComponent } from './mbmain/mbmain.component';

export const MbHomeRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'main',
        component: MbmainComponent
    },
    ]
}];
