import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

export interface ChamberProps {
  chamberName: string;
  chamberImage: string;
}


export const chamberResolve: ResolveFn<ChamberProps> =  (route: ActivatedRouteSnapshot) => {

  switch (route.params["chamber"]) {
    case "1":
      return {
        chamberName: "The Living Gate",
        chamberImage: "../../assets/images/The_Living_Gate_v3.webp"
      }
    case "2":
      return {
        chamberName: "Dark Hallway",
        chamberImage: "../../assets/images/Dark_Hallway_v3.webp"
      };
    case "3":
      return {
        chamberName: "Astronomy Tower",
        chamberImage: "../../assets/images/Astronomy_Tower_v3.webp"
      }
    default:
      return {
        chamberName: "Inside the void",
        chamberImage: "../../assets/images/Inside_the_void_v2.webp"
      };
  }
  
}