import { Component, OnInit } from '@angular/core';
import { Building } from '@buildio/building/models';
import { BuildingService } from '@buildio/building/services/building.service';
import { NicknameStorageService } from '@buildio/building/services/nickname-storage.service';

@Component({
  templateUrl: './selected-building-page.component.html',
  styleUrls: ['./selected-building-page.component.scss'],
})
export class SelectedBuildingPageComponent implements OnInit {
  building: Building;
  nicknames: string[];
  canSaveNicknames: boolean;

  constructor(
    private buildService: BuildingService,
    private nickNameStorage: NicknameStorageService
  ) {}

  ngOnInit(): void {
    this.buildService.canSaveNicknames.subscribe( (areNicknamesValid => {
      this.canSaveNicknames = areNicknamesValid;
    }) );

    this.building = {
      id: 17,
      nicknames: ['aEmpire', 'aShard'],
      address: {
        city: 'London',
        street: '30 St Mary Axe',
      },
      description: `It stands 103 stories tall (1,250 feet to top floor, excludes height of antennae, which is 204 feet).
        It is located on Fifth Avenue between 33rd and 34th streets in Manhattan.
        The Empire State Building took only one year and 45 days to build, or more than seven million man-hours`,
    };

    this.nickNameStorage.set(this.building.nicknames);

    // when there is a new change we update the nicknames
    this.nickNameStorage.nicknamesState.subscribe((nicknames) => {
      this.nicknames = nicknames;
    });
  }

  addNickname(nickname: string): void {
    if (!nickname) {
      return;
    }
    this.buildService.addNickname(nickname);
  }

  removeNickname(nickname: string): void {
    if (!nickname) {
      return;
    }
    this.buildService.removeNickname(nickname);
  }

  saveNicknames(): void {
    console.log('Saving nicknames -> ', this.nickNameStorage.get());
  }
}
