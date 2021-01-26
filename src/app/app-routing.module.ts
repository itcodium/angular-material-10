import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageInputComponent } from './views/page-input/page-input.component';
import { PageSearchComponent } from './views/page-search/page-search.component';
import { PageTableComponent } from './views/page-table/page-table.component';

const routes: Routes = [
  { path: '', component: PageInputComponent },
  { path: 'input', component: PageInputComponent },
  { path: 'table', component: PageTableComponent },
  { path: 'search', component: PageSearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
