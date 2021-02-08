import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableCrudComponent } from './table-crud.component';

describe('View Table', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TableCrudComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableCrudComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});