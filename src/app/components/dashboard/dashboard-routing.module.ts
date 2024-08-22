import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { RecordCardComponent } from "../record-card/record-card.component";

const routes:Routes=[
    {
        path:'',
        component:DashboardComponent,
        children:[
            {path:'students',component:RecordCardComponent},
            {path:'teachers',component:RecordCardComponent}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class DashboardRoutingModule{}

