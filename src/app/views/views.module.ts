import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { PageInputComponent } from './page-input/page-input.component';
import { PageTableComponent } from './page-table/page-table.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { TableCrudComponent } from './table-crud/table-crud.component';
import { BookComponent } from './table-crud/book/book.component';
import { FormComponent } from './table-crud/form/form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        ComponentsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ],
    exports: [
        PageInputComponent,
        PageTableComponent,
        PageSearchComponent,
        TableCrudComponent,
        BookComponent,
        FormComponent,
    ],
    declarations: [
        PageInputComponent,
        PageTableComponent,
        PageSearchComponent,
        TableCrudComponent,
        BookComponent,
        FormComponent,
    ]
})
export class ViewsModule { }