
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSearchComponent } from './page-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { Observable, of } from 'rxjs';
describe('View Search', () => {
  let component: PageSearchComponent;
  let fixture: ComponentFixture<PageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [PageSearchComponent],
      providers: [
        { provide: SearchService, useClass: SearchServiceStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class SearchServiceStub {
  search(filter: string = ""): Observable<object[]> {
    return of([]);
  }
}
/*
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageSearchComponent } from './page-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
describe('View Search', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PageSearchComponent
      ],
      providers: [
        { provide: SearchService, useClass: SearchServiceStub }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PageSearchComponent);
    const app = fixture.componentInstance;
    console.log('app: ', app);
    expect(app).toBeTruthy();
  });

});


*/