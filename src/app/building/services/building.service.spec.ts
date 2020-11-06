import { BuildingService } from './building.service';

describe('BuildingService', () => {
  let service: BuildingService;

  beforeEach(() => {
    service = new BuildingService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#isValidNickname should return true if name starts with letter a and false otherwise.', (done: DoneFn) => {
    service.isValidNickname('aTest').subscribe((value) => {
      expect(value).toBe(true);
      done();
    });

    service.isValidNickname('bTest').subscribe((value) => {
      expect(value).toBe(false);
      done();
    });
  });

});
