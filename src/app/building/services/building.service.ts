import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  constructor(private snackBar: MatSnackBar) {}

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
}
