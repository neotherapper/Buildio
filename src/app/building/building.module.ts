import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import { BuildingDetailComponent } from './components/building-detail/building-detail.component';
import { SelectedBuildingPageComponent } from './containers/selected-building-page/selected-building-page.component';


@NgModule({
  declarations: [BuildingComponent, BuildingDetailComponent, SelectedBuildingPageComponent],
  imports: [
    CommonModule,
    BuildingRoutingModule
  ]
})
export class BuildingModule { }
