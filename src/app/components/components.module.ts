import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ModuleTitle } from './ModuleTitle/ModuleTitle';
import { InputTextComponent } from './input-text/input-text.component';
import { TableBootComponent } from './table-boot/table-boot.component';
import { ApiSearchComponent } from './api-search/api-search.component';

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
    InputTextComponent,
    TableBootComponent,
    ApiSearchComponent,
  ],
  declarations: [
    ModuleTitle,
    InputTextComponent,
    TableBootComponent,
    ApiSearchComponent,
  ]
})
export class ComponentsModule { }
