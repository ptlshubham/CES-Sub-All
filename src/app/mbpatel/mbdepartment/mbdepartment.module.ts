import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MbhomeModule } from "../mbhome/mbhome.module";
import { MbsharedModule } from "../mbshared/mbshared.module";
import { MbPhysicsComponent } from "./mb-physics/mb-physics.component";
import { MbDepartmentRoutes } from "./mbdepartment.routing";


@NgModule({
  declarations: [
    MbPhysicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MbDepartmentRoutes),
    MbhomeModule,
    MbsharedModule
  ],
  exports:[
    MbPhysicsComponent
  ]
  
})
export class MbdepartmentModule { }
