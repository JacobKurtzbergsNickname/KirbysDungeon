// Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberComponent } from './chamber.component';
import { ActivatedRoute } from '@angular/router';

// Local test helpers
class ActivatedRouteStub {
  data = {
    subscribe: (fn: (value: any) => void) => fn({
      chamberProps: {
        chamberImage: 'image',
        chamberName: 'name'
      }
    })
  };
}

describe('ChamberComponent', () => {
  let component: ChamberComponent;
  let fixture: ComponentFixture<ChamberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamberComponent],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(ChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
