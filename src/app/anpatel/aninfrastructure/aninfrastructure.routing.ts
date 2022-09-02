import { Routes } from '@angular/router';
import { AnInfraComponent } from './an-infra/an-infra.component';

export const AnInfrastructureRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'infra',
        component: AnInfraComponent
    },
]
}];