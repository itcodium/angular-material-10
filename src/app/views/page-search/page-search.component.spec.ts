import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageSearchComponent } from './page-search.component';
import { HttpClientModule } from '@angular/common/http';
describe('Page Search Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PageSearchComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PageSearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchComponent } from './page-search.component';

describe('PageSearchComponent', () => {
  let component: PageSearchComponent;
  let fixture: ComponentFixture<PageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/