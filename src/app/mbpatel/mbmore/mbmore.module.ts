import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MbhomeModule } from "../mbhome/mbhome.module";
import { MbsharedModule } from "../mbshared/mbshared.module";
import { MbMoreRoutes } from "./mbmore.routing";
import { MbFormComponent } from './mb-form/mb-form.component';
import { MbBankdetailComponent } from './mb-bankdetail/mb-bankdetail.component';



@NgModule({
  declarations: [
  
    MbFormComponent,
       MbBankdetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MbMoreRoutes),
    MbhomeModule,
    MbsharedModule
  ],
  exports:[
    MbFormComponent
  ]
  
})
export class MbmoreModule { }
