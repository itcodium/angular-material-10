import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PageInputComponent } from './page-input/page-input.component';
import { PageTableComponent } from './page-table/page-table.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        PageInputComponent,
        PageTableComponent,
        PageSearchComponent
    ],
    declarations: [
        PageInputComponent,
        PageTableComponent,
        PageSearchComponent
    ]
})
export class ViewsModule { }