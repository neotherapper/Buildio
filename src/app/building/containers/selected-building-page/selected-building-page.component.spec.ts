import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBuildingPageComponent } from './selected-building-page.component';

describe('SelectedBuildingPageComponent', () => {
  let component: SelectedBuildingPageComponent;
  let fixture: ComponentFixture<SelectedBuildingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedBuildingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBuildingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
