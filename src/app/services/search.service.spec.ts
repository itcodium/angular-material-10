import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('Search Service', () => {
  let service: SearchService;
  let serviceMock: any;
  beforeEach(() => {
    serviceMock = jasmine.createSpyObj('SearchService', ['search'])
    serviceMock.search.and.returnValue(of([]));
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: SearchService }
      ]
    });
    service = TestBed.inject(SearchService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call to search service', () => {
    service.search("filter").subscribe(data => {
      expect(data.length).toBe(0)
    })
  });
});
