import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableMatComponent } from './table-mat.component';
import { SearchService } from 'src/app/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

let loader: HarnessLoader;
// https://codecraft.tv/courses/angular/unit-testing/asynchronous/

describe('TableMat', () => {
    let component: TableMatComponent;
    let fixture: ComponentFixture<TableMatComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule
            ],
            declarations: [
                TableMatComponent
            ],
            providers: [
                { provide: SearchService, useClass: SearchServiceStub }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(TableMatComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        component = fixture.componentInstance;
        component.columns = columns;
        component.data = data;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(TableMatComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
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
