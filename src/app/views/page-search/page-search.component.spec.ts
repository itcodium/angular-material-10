
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSearchComponent } from './page-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


describe('View Search', () => {
  let component: PageSearchComponent;
  let fixture: ComponentFixture<PageSearchComponent>;
  let animeServiceMock: any;

  beforeEach(async () => {
    animeServiceMock = jasmine.createSpyObj('SearchService', ['search'])
    animeServiceMock.search.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [PageSearchComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: SearchService, useValue: animeServiceMock }
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
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    nativeButton.click();
    expect(router.navigateByUrl).
      toHaveBeenCalledWith(router.createUrlTree(['/input']),
        {
          skipLocationChange: false,
          replaceUrl: false,
          state: undefined
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
});

const animeServiceMock = [{
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

