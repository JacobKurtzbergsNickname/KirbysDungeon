import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChamberProps } from '../chamber-resolve';

@Component({
  templateUrl: './chamber.component.html',
  styleUrls: ['./chamber.component.scss']
})
export class ChamberComponent implements OnInit {
  
  private _activatedRoute = inject(ActivatedRoute);

  chamberName   = "";
  chamberImage  = "";

  ngOnInit(): void {

    this._activatedRoute.data.subscribe((data) => {
      const {chamberImage, chamberName} = data["chamberProps"] as ChamberProps;
      this.chamberName = chamberName;
      this.chamberImage = chamberImage
    });
  }

}
