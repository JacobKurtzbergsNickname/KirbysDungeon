import { Routes } from "@angular/router";
import { ChamberComponent, chamberResolve } from "../components";


export const chambers: Routes = [
  {
    path: "chamber/:chamber",
    component: ChamberComponent,
    resolve: {chamberProps: chamberResolve},
    runGuardsAndResolvers: "always"
  },
  { path: "", redirectTo: "/chamber", pathMatch: "full" }
]