import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { sum, TuiHoveredService } from "@taiga-ui/cdk";
import { from, of } from "rxjs";
import { tap } from 'rxjs/operators';
import { resolveBudget } from "../../../../../topic-5/task-2/index"

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./second.task.component.html",
    styleUrls: ["./styles/styles.less"]
})
export class SecondTaskDeclareComponent implements OnInit{
    activeItemIndex: number = -1;
 
    public value: number[] = [13769, 12367, 10172, 3018, 2592];
    public labels: string[] = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

    constructor(
    ){
        
    }

    @ViewChild("element")
    public elem!: HTMLElement;


    public ngOnInit(): void{
        //@ts-ignore
        const dataArray: IPurchase[] = resolveBudget();
        if(dataArray && dataArray?.length){
            this.value = []
            this.labels = []
        }
        const newValues: number[] = []
        const newLabels: string[] = []
        from(dataArray).pipe(
            tap((item: IPurchase) => {
                const index: number = newLabels.findIndex((type: string) => {
                    return item.type === type 
                })
                if(index !== -1){
                    newValues[index] += item.value
                    return
                }
                newValues.push(item.value);
                newLabels.push(item.type);
            })
        ).subscribe(()=>{}, ()=>{}, ()=>{
            this.value = newValues;
            this.labels = newLabels
        })
    }

    public getSum(): number{
        return sum(...this.value)
    }

    isItemActive(index: number): boolean {
        return this.activeItemIndex === index;
    }
 
    onHover(index: number, hovered: boolean) {
        this.activeItemIndex = hovered ? index : -1;
    }
 
    getColor(index: number): string {
        return `var(--tui-chart-${index})`;
    }

}

interface IPurchase{
    name: string,
    code: number,
    type: string,
    value: number
}

