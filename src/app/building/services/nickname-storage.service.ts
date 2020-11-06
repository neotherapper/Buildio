import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NicknameStorageService {
  nicknamesState = new BehaviorSubject<string[]>([]);

  constructor() {}

  get(): string[] {
    return this.nicknamesState.value;
  }

  set(nicknames: string[]): void {
    this.nicknamesState.next(nicknames);
  }

  add(newNickname: string): void {
    const assets = [...this.nicknamesState.value, newNickname];
    this.nicknamesState.next(assets);
  }

  remove(nickname: string): void {
    const currentNickNames = this.nicknamesState.value;
    const newNickNames = currentNickNames.filter((e) => e !== nickname);
    this.nicknamesState.next(newNickNames);
  }
}
