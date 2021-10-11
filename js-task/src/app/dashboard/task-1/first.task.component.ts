import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./first.task.component.html",
    styleUrls: ["./styles/styles.less"]
})
export class FirstTaskDeclareComponent{

}