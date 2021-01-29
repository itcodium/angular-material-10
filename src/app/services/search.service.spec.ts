import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';

describe('Search Service', () => {
  let service: SearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SearchService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

