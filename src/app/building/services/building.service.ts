import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  isValidNickname(nickname: string): Observable<boolean> {
    // tslint:disable-next-line:deprecation
    return of( (nickname.charAt(0) === 'a' ? true : false) );
  }
}
