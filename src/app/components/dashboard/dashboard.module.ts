import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from "@angular/common";
import { RecordCardComponent } from "../record-card/record-card.component";
import { DashboardComponent } from "./dashboard.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/pipes/filter.pipe";

@NgModule({
    declarations:[
        DashboardComponent,
        RecordCardComponent,
        FilterPipe
    ],
    imports:[
        CommonModule,
        DashboardRoutingModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        FormsModule
    ]
})

export class DashboardModule{}
