import { NgModule } from "@angular/core";
import { FirstTaskDeclareComponent } from './task-1/first.task.component';
import { Routes, RouterModule } from '@angular/router';
import { TuiButtonModule, TuiLoaderModule } from "@taiga-ui/core";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'first'
    },
    {
        path: 'first',
        component: FirstTaskDeclareComponent
    }
]

@NgModule({
    declarations:[
        FirstTaskDeclareComponent
        
    ],
    providers: [

    ],
    imports: [
        RouterModule.forChild(routes),
        TuiLoaderModule,
        TuiButtonModule
    ]
})
export class TaskDeclarationModule{};