import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableBootComponent } from './table-boot.component';
import { SearchService } from 'src/app/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';

import { MatRowHarness, MatTableHarness } from '@angular/material/table/testing';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

let loader: HarnessLoader;
// https://codecraft.tv/courses/angular/unit-testing/asynchronous/

describe('TableBoot', () => {
    let component: TableBootComponent;
    let fixture: ComponentFixture<TableBootComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule
            ],
            declarations: [
                TableBootComponent
            ],
            providers: [
                { provide: SearchService, useClass: SearchServiceStub }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(TableBootComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        component = fixture.componentInstance;
        component.columns = columns;
        component.data = data;
        // component.ngOnInit();
        fixture.detectChanges();

    });


    it('should create', () => {
        const fixture = TestBed.createComponent(TableBootComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });


    it('should have title', () => {
        const element = fixture.debugElement.query(By.css('h2'));
        expect(element.nativeElement.textContent).toBe("Angular 2");
    });

    it('should have table', () => {
        const element = fixture.debugElement.query(By.css('table'));
        expect(element).toBeTruthy();
    });
    it('should have Table body', () => {
        const element = fixture.debugElement.query(By.css('table tbody'));
        expect(element).toBeTruthy();
    });

    it('should have 2 rows', () => {
        const rows = fixture.debugElement.queryAll(By.css('.mat-table tbody tr'));
        expect(rows.length).toBe(1);
    });
});

const columns = [
    { field: 'id', title: 'Id', visible: true },
    { field: 'name', title: 'Nombre', visible: true },
    { field: 'location', title: 'Ubicacion', visible: true },
    { field: 'fake', title: 'Fake', visible: false },
];

const data = [
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
class SearchServiceStub {
    search(filter: string = ""): Observable<object[]> {
        return of([]);
    }
}
