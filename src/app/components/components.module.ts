import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModuleTitle } from './ModuleTitle/ModuleTitle';
import { InputTextComponent } from './input-text/input-text.component';
import { TableBootComponent } from './table-boot/table-boot.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    ModuleTitle,
    InputTextComponent,
    TableBootComponent,
  ],
  declarations: [
    ModuleTitle,
    InputTextComponent,
    TableBootComponent,
  ]
})
export class ComponentsModule { }
