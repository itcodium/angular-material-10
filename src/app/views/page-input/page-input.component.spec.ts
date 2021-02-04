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
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should set value on submit', () => {
    const fixture = TestBed.createComponent(PageInputComponent);
    const component = fixture.componentInstance;
    const TEST_VALUE = "Test Submit";
    component.onSubmit(TEST_VALUE);
    fixture.detectChanges();
    expect(TEST_VALUE).toBe(component.value);

  });

});
