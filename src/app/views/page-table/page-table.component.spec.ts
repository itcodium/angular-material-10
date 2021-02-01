import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageTableComponent } from './page-table.component';

describe('View Table', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PageTableComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PageTableComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});