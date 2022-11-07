import { Routes } from '@angular/router';
import { AnPapersComponent } from './an-papers/an-papers.component';
import { AnResultComponent } from './an-result/an-result.component';
import { AnSyllabusComponent } from './an-syllabus/an-syllabus.component';

export const AnMoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'syllabus',
            component: AnSyllabusComponent
        },
        {
            path: 'paper',
            component: AnPapersComponent
        },
        {
            path: 'result',
            component: AnResultComponent
        }

]
}];