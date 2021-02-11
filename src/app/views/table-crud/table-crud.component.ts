import { Component, OnInit } from '@angular/core';
import { BookComponent } from './book/book.component'
import { FormComponent } from './form/form.component'

import { BookService } from './service/bookService'
@Component({
  selector: 'table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.scss']
})
export class TableCrudComponent implements OnInit {
  formBook = BookComponent;
  form = FormComponent;

  constructor(public bookService: BookService) {
  }
  ngOnInit() {
  }
  columns = [
    { field: 'id', title: 'Id', visible: true },
    { field: 'name', title: 'Nombre', visible: true },
    { field: 'location', title: 'Ubicacion', visible: true },
    { title: 'Editar', visible: true, type: 'edit' },
  ];

  employee: object[] = [
    {
      "id": 1,
      "name": "Admin",
      "location": "USA"
    },
    {
      "id": 2,
      "name": "User",
      "location": "USA"
    },
    {
      "id": 3,
      "name": "User2",
      "location": "USA"
    }
  ]
} 