import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModuleTitle } from './ModuleTitle/ModuleTitle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    ModuleTitle,
  ],
  declarations: [
    ModuleTitle,
  ]
})
export class ComponentsModule { }
