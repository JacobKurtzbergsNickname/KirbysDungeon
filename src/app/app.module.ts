import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DungeonComponent } from "./dungeon/dungeon.component";
import { ChamberComponent } from "./chamber/chamber.component";

@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    ChamberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
