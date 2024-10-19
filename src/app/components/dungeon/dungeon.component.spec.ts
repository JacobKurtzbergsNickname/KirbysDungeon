import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DungeonComponent } from "./dungeon.component";
import { AppRoutingModule } from "src/app/app-routing.module";

describe("DungeonComponent", () => {
  let component: DungeonComponent;
  let fixture: ComponentFixture<DungeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [DungeonComponent]
    });
    fixture = TestBed.createComponent(DungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
