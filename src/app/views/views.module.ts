import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PageInputComponent } from './page-input/page-input.component';
import { PageTableComponent } from './page-table/page-table.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { TableCrudComponent } from './table-crud/table-crud.component';
import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        ComponentsModule
    ],
    exports: [
        PageInputComponent,
        PageTableComponent,
        PageSearchComponent,
        TableCrudComponent
    ],
    declarations: [
        PageInputComponent,
        PageTableComponent,
        PageSearchComponent,
        TableCrudComponent
    ]
})
export class ViewsModule { }