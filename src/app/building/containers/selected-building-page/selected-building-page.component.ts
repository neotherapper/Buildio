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
  canSave: boolean;

  constructor(
    private buildService: BuildingService,
    private nickNameStorage: NicknameStorageService
  ) {}

  ngOnInit(): void {
    this.building = {
      id: 17,
      nicknames: ['empire', 'shard'],
      address: {
        city: 'London',
        street: '30 St Mary Axe',
      },
      description: `It stands 103 stories tall (1,250 feet to top floor, excludes height of antennae, which is 204 feet).
        It is located on Fifth Avenue between 33rd and 34th streets in Manhattan.
        The Empire State Building took only one year and 45 days to build, or more than seven million man-hours`,
    };

    this.nickNameStorage.setNicknames(this.building.nicknames);

    // when there is a new change we update the nicknames
    this.nickNameStorage.nicknamesState.subscribe((nicknames) => {
      this.nicknames = nicknames;
    });
  }

  async addNickName(nickname: string): Promise<void> {
    if (!nickname) {
      return;
    }
    const isValidNickname = await this.buildService
      .isValidNickname(nickname)
      .toPromise();

    if (isValidNickname) {
      this.nickNameStorage.addNickName(nickname);
    } else {
      this.buildService.showWarningMessage(
        `${nickname} is not a valid option please try a nickname that starts with a`
      );
    }
  }

  async removeNickName(nickname: string): Promise<void> {
    if (!nickname) {
      return;
    }
    const isValidNickname = await this.buildService
      .isValidNickname(nickname)
      .toPromise();

    if (isValidNickname) {
      this.nickNameStorage.removeNickname(nickname);
    }
  }

  saveNicknames(): void {
    console.log('Saving nicknames -> ', this.nickNameStorage.getNicknames());
  }
}
