import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NicknameStorageService } from './nickname-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  // used it to track the number of invalid nicknames
  // because we don't want to hit api calls many times.
  // alternatively api could receive all arrays as query parameter
  // and return true if we can save the nicknames
  // third solution is to not allow invalid names to be added to the stack
  // but requirements are that invalid nicknames should be visible.
  invalidNicknamesCounter = 0;
  canSaveNicknames = new BehaviorSubject<boolean>(true);

  constructor(
    private snackBar: MatSnackBar,
    private nicknameStorage: NicknameStorageService
  ) {}

  isValidNickname(nickname: string): Observable<boolean> {
    // tslint:disable-next-line:deprecation
    return of(nickname.charAt(0) === 'a' ? true : false);
  }

  showWarningMessage(message: string): void {
    this.snackBar.open(message, null, {
      duration: 4000,
      panelClass: ['mat-warn'],
    });
  }

  showSuccessMessage(message: string): void {
    this.snackBar.open(message, null, {
      duration: 4000,
    });
  }

  async addNickname(nickname: string): Promise<void> {
    this.nicknameStorage.add(nickname);
    const isValidNickname = await this.isValidNickname(nickname).toPromise();

    if (!isValidNickname) {
      this.changeNicknameCounter(true);
      this.showWarningMessage(
        `${nickname} is not a valid option please try a nickname that starts with a`
      );
    }
  }

  async removeNickname(nickname: string): Promise<void> {
    this.nicknameStorage.remove(nickname);
    const isValidNickname = await this.isValidNickname(nickname).toPromise();

    if (!isValidNickname) {
      this.changeNicknameCounter(false);
    }
  }

  private changeNicknameCounter(isIncrease: boolean): void {
    if (isIncrease) {
      this.invalidNicknamesCounter++;
    } else {
      this.invalidNicknamesCounter--;
    }

    this.saveNicknamesValidation();
  }

  private saveNicknamesValidation(): void {
    console.log(this.invalidNicknamesCounter);
    this.invalidNicknamesCounter > 0
      ? this.canSaveNicknames.next(false)
      : this.canSaveNicknames.next(true);
  }
}
