import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnheaderComponent } from './anheader/anheader.component';
import { AnfooterComponent } from './anfooter/anfooter.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AnheaderComponent,
    AnfooterComponent,
  ],
  imports: [
    CommonModule,
    NgbCollapseModule
  ],
  exports:[
    AnheaderComponent,
    AnfooterComponent
  ]
})
export class AnsharedModule { }
