import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbheaderComponent } from './mbheader/mbheader.component';
import { MbfooterComponent } from './mbfooter/mbfooter.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MbheaderComponent,
    MbfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,

  ],
  exports: [
    MbheaderComponent,
    MbfooterComponent
  ]
})
export class MbsharedModule { }
