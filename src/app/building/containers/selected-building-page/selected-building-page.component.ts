import { Component, OnInit } from '@angular/core';
import { Building } from '@buildio/building/models';

@Component({
  templateUrl: './selected-building-page.component.html',
  styleUrls: ['./selected-building-page.component.scss']
})
export class SelectedBuildingPageComponent implements OnInit {

  building: Building;

  constructor() { }

  ngOnInit(): void {
    this.building = {
      id: 17,
      nicknames: ['empire', 'shard'],
      address: {
        city: 'London',
        street: '30 St Mary Axe',
      },
      description:
        `It stands 103 stories tall (1,250 feet to top floor, excludes height of antennae, which is 204 feet).
        It is located on Fifth Avenue between 33rd and 34th streets in Manhattan.
        The Empire State Building took only one year and 45 days to build, or more than seven million man-hours`,
    };
  }

}
