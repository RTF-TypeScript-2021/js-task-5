import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ViewChildren } from "@angular/core";
import { breadcrumbCalculate } from "../../../../../topic-5/task-1/index"
import { TUI_SANITIZER } from '@taiga-ui/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./first.task.component.html",
    styleUrls: ["./styles/styles.less"]
})
export class FirstTaskDeclareComponent implements AfterViewInit{

    @ViewChild("counter")
    public elem!: HTMLElement;

    public cntSanized: SafeHtml = "0";

    constructor(
        private san: DomSanitizer,
        private _cdr: ChangeDetectorRef
    ){

    }

    public ngAfterViewInit(): void{
    }

    public calculate(): void{
        const setter = (value: any) => this.cntSanized = this.san.bypassSecurityTrustHtml(`${value}`);
        this.safeDetect();
        breadcrumbCalculate(setter)
    }

    private safeDetect(): void{
        (() => this._cdr.detectChanges())()
        console.log("detect")
        setTimeout(() => (this.safeDetect()), 10)
    }
}