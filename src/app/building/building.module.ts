import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@buildio/material';
import { ComponentsModule } from '@buildio/components';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import { BuildingDetailComponent } from './components/building-detail/building-detail.component';
import { SelectedBuildingPageComponent } from './containers/selected-building-page/selected-building-page.component';
import { BuildingService } from './services/building.service';

export const COMPONENTS = [BuildingDetailComponent];

export const CONTAINERS = [
  BuildingComponent,
  SelectedBuildingPageComponent
];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
  providers: [BuildingService]
})
export class BuildingModule {}
