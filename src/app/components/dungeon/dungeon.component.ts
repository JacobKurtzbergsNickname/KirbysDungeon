import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "robur-dungeon",
  templateUrl: "./dungeon.component.html",
  styleUrls: ["./dungeon.component.scss"]
})
export class DungeonComponent {
  title = "Kirbys Dungeon";
  chamber = 0;

  private _router = inject(Router);

  nextChamber(){
    this.chamber++ 
    this.showChamber()
  };

  previousChamber(){
    this.chamber--
    this.showChamber()
  }

  showChamber(){
    this._router.navigate(["/chamber", this.chamber]);
  }

}
