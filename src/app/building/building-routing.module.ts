import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingComponent } from './building.component';
import { SelectedBuildingPageComponent } from './containers/selected-building-page/selected-building-page.component';

const routes: Routes = [
  { path: '', component: BuildingComponent },
  { path: ':id', component: SelectedBuildingPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
