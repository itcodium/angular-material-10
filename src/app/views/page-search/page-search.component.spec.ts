
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSearchComponent } from './page-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';


describe('View Search', () => {
  let component: PageSearchComponent;
  let fixture: ComponentFixture<PageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSearchComponent, DummyComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([{
          path: 'input', component: DummyComponent
        }
        ])
      ],

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
  it('should have title', () => {
    const element = fixture.debugElement.query(By.css('h2'));
    expect(element.nativeElement.textContent).toBe("Buscador de anime");
  });
  it('should be minimun one + buttom on the page', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length >= 1).toBeTruthy();
  });
  it('should be a + buttom first on the page', () => {
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    expect(nativeButton.textContent).toBe('+');
  });
  it('should navigate to / before + button click', () => {
    const location = TestBed.inject(Location)
    expect(location.path()).toBe('');
  });
  it('should navigate to /input on + button click', () => {
    const location = TestBed.inject(Location)
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    nativeButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/input');
    });
  });
  it('should show one app-input-text', () => {
    const input = fixture.debugElement.queryAll(By.css('app-input-text'));
    expect(input.length).toBe(1);
  });
  it('should not be a table', () => {
    const table = fixture.debugElement.queryAll(By.css('table-boot'));
    expect(table.length).toBe(0);
  });

  /*
  it('should show a table', () => {
    component.data = mock;
    fixture.detectChanges();
    const table = fixture.debugElement.queryAll(By.css('table-boot'));
    expect(table.length).toBe(1);
  });*/


});


@Component({ template: '' })
class DummyComponent { }

class SearchServiceStub {
  search(filter: string = ""): Observable<object[]> {
    return of([]);
  }
}


const mock = [{
  "mal_id": 20,
  "url": "https:\/\/myanimelist.net\/anime\/20\/Naruto",
  "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
  "title": "Naruto",
  "airing": false,
  "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
  "type": "TV",
  "episodes": 220,
  "score": 7.91,
  "start_date": "2002-10-03T00:00:00+00:00",
  "end_date": "2007-02-08T00:00:00+00:00",
  "members": 1753999,
  "rated": "PG-13"
}];

