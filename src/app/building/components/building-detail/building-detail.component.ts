import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
