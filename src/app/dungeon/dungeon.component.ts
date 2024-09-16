import { Component } from "@angular/core";

@Component({
  selector: "dungeon",
  templateUrl: "./dungeon.component.html",
  styleUrls: ["./dungeon.component.scss"]
})
export class DungeonComponent {
  title = "Kirbys Dungeon";
  chamber = 0;

  nextChamber(){
    this.chamber++ 
    this.showChamber()
  };

  previousChamber(){
    this.chamber--
    this.showChamber()
  }

  showChamber(){
    console.groupCollapsed("this.stepsTaken");
    console.log(this.chamber);
    console.groupEnd();
  }

}
