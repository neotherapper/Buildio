import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NicknameStorageService {
  nicknamesState = new BehaviorSubject<string[]>([]);

  constructor() {}

  getNicknames(): string[] {
    return this.nicknamesState.value;
  }

  setNicknames(nicknames: string[]): void {
    this.nicknamesState.next(nicknames);
  }

  addNickName(newNickName: string): void {
    const assets = [...this.nicknamesState.value, newNickName];
    this.nicknamesState.next(assets);
  }

  removeNickname(nickname: string): void {
    const currentNickNames = this.nicknamesState.value;
    const newNickNames = currentNickNames.filter((e) => e !== nickname);
    this.nicknamesState.next(newNickNames);
  }
}
