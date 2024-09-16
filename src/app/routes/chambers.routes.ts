import { Routes } from "@angular/router";
import { ChamberComponent } from "../chamber/chamber.component";

export const chambers: Routes = [
  {
    path: "chamber",
    component: ChamberComponent,
    children: [
      // {path: "chamber/:id", component: ChamberComponent}
    ]
  },
  { path: "", redirectTo: "/chamber", pathMatch: "full" }
]