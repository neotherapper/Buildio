import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Building } from '@buildio/building/models';
import { BuildingDetailComponent } from './building-detail.component';

describe('BuildingDetailComponent', () => {
  let component: BuildingDetailComponent;
  let fixture: ComponentFixture<BuildingDetailComponent>;
  let buildingDe;
  let buildingEl;
  let expectedBuilding: Building;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailComponent);
    component = fixture.componentInstance;

    // find the building's DebugElement and element
    buildingDe = fixture.debugElement.query(By.css('.building-detail'));
    buildingEl = buildingDe.nativeElement;

    // mock the building supplied by the parent component
    expectedBuilding = {
      id: 17,
      nicknames: [],
      address: {
        city: 'London',
        street: '30 St Mary Axe',
      },
      description: 'Test description',
    };

    // simulate the parent setting the input property with that building
    component.building = expectedBuilding;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Title in uppercase', () => {
    const expectedTitle = `${expectedBuilding.address.street}, ${expectedBuilding.address.city}`.toUpperCase();
    expect(buildingEl.textContent).toContain(expectedTitle);
  });


});
