import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { chambers } from "./routes/chambers.routes";


@NgModule({
  imports: [RouterModule.forRoot(chambers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
