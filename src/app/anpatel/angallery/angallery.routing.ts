import { Routes } from '@angular/router';
import { AnPhotosComponent } from './an-photos/an-photos.component';

export const AnGalleryRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'photos',
            component: AnPhotosComponent
        }
        
    ]
}];
