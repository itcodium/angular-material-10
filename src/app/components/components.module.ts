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
import { Dialog } from './Modal/Dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHostDirective } from './profile/ViewContainerRef';

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
    TestOneComponent,
    TestTwoComponent,
    ProfileComponent,
    ProfileHostDirective
  ]
})

export class ComponentsModule { }
