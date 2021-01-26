import { Component, OnInit } from '@angular/core';

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

  employee = [
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
