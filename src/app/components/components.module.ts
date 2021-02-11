import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ModuleTitle } from './ModuleTitle/ModuleTitle';
import { InputTextComponent } from './input-text/input-text.component';
import { TableBootComponent } from './table-boot/table-boot.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Dialog } from './table-boot/modal/dialog';
import { ProfileComponent } from './table-boot/profile/profile.component';
import { ProfileHostDirective } from './table-boot/profile/ViewContainerRef';


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
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports: [
    ModuleTitle,
    InputTextComponent,
    TableBootComponent,
    Dialog,
  ],
  declarations: [
    ModuleTitle,
    InputTextComponent,
    TableBootComponent,
    Dialog,
    ProfileComponent,
    ProfileHostDirective
  ]
})

export class ComponentsModule { }
