import { Routes } from '@angular/router';
import { MbPhotosComponent } from './mb-photos/mb-photos.component';

export const MbGalleryRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'photos',
            component: MbPhotosComponent
        }
        
    ]
}];
