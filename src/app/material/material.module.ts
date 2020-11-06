import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
