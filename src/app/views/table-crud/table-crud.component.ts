import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.scss']
})
export class TableCrudComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
  columns = [
    { field: 'id', title: 'Id', visible: true },
    { field: 'name', title: 'Nombre', visible: true },
    { field: 'location', title: 'Ubicacion', visible: true },
    { field: 'fake', title: 'Fake', visible: false },
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