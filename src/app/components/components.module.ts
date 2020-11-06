import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NickameEditorComponent } from './nickame-editor/nickame-editor.component';

import { MaterialModule } from '@buildio/material';

export const COMPONENTS = [NickameEditorComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: COMPONENTS,
})
export class ComponentsModule {}
