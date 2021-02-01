import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageInputComponent } from './page-input.component';
describe('View Input', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PageInputComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PageInputComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
