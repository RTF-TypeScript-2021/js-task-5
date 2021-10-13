import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayerComponent } from './layout/page/page.component';
import { HeaderLayerComponent } from './layout/header/header.component';
import { AsideLayerComponent } from "./layout/aside/aside.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { TuiHoveredModule, TuiHoveredService } from "@taiga-ui/cdk";

@NgModule({
  declarations: [
    AppComponent,
    PageLayerComponent,
    AsideLayerComponent,
    HeaderLayerComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,

],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, TuiHoveredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
