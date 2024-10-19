import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChamberComponent, DungeonComponent } from "./components";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DungeonComponent,
    ChamberComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
