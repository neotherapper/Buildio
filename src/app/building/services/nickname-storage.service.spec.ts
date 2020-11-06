import { TestBed } from '@angular/core/testing';

import { NicknameStorageService } from './nickname-storage.service';

describe('NicknameStorageService', () => {
  let service: NicknameStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NicknameStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
