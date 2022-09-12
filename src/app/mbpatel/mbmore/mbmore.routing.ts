import { Routes } from '@angular/router';
import { MbBankdetailComponent } from './mb-bankdetail/mb-bankdetail.component';
import { MbFormComponent } from './mb-form/mb-form.component';


export const MbMoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'form',
            component: MbFormComponent
        },
        {
            path: 'bdetail',
            component: MbBankdetailComponent
        }
    ]
}];
