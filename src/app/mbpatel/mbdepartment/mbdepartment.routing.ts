import { Routes } from '@angular/router';
import { MbPhysicsComponent } from './mb-physics/mb-physics.component';


export const MbDepartmentRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'physics',
            component: MbPhysicsComponent
        }
    ]
}];
