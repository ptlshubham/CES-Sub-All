import { Routes } from '@angular/router';
import { AnChemistryComponent } from './an-chemistry/an-chemistry.component';

export const AnDepartmentRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'chemistry',
        component: AnChemistryComponent
    },
    ]
}];
