import { NgModule } from "@angular/core";
import { FirstTaskDeclareComponent } from './task-1/first.task.component';
import { Routes, RouterModule } from '@angular/router';
import { TuiButtonModule, TuiDialogModule, TuiLoaderModule, TuiNotificationsModule, TuiRootModule } from "@taiga-ui/core";
import { SecondTaskDeclareComponent } from './task-2/second.task.component';
import {TuiBarModule, TuiLegendItemModule, TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiHoveredDirective, TuiHoveredModule } from "@taiga-ui/cdk";
 

const routes: Routes = [
    {
        path: '',
        redirectTo: 'first'
    },
    {
        path: 'first',
        component: FirstTaskDeclareComponent
    },
    {
        path: 'second',
        component: SecondTaskDeclareComponent
    },
]

@NgModule({
    declarations:[
        FirstTaskDeclareComponent,
        SecondTaskDeclareComponent
    ],
    providers: [

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TuiLoaderModule,
        TuiButtonModule,
        TuiLegendItemModule,
        TuiMoneyModule,
        TuiRingChartModule,
        TuiBarModule,
        TuiRootModule,
        TuiDialogModule,
        TuiNotificationsModule,
        TuiHoveredModule
    ]
})
export class TaskDeclarationModule{};