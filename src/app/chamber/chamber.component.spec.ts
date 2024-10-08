import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChamberComponent } from "./chamber.component";

describe("ChamberComponent", () => {
  let component: ChamberComponent;
  let fixture: ComponentFixture<ChamberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamberComponent]
    });
    fixture = TestBed.createComponent(ChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
