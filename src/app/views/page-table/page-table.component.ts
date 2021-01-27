import { Component, OnInit } from '@angular/core';
/*
export interface Employee {
  name: string;
  id: number;
  location: string;
}
*/
@Component({
  selector: 'page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})


export class PageTableComponent implements OnInit {
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
  constructor() {
  }

  ngOnInit() {
  }

}
