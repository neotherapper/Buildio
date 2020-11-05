import { TestBed } from '@angular/core/testing';

import { BuildingStorageService } from './building-storage.service';

describe('BuildingStorageService', () => {
  let service: BuildingStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
