import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBootComponent } from './table-boot.component';

describe('TableBootComponent', () => {
  let component: TableBootComponent;
  let fixture: ComponentFixture<TableBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
