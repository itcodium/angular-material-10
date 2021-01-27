import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  @Input() value: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  onSubmit(data: string) {
    this.data = [];
    this.loading = true;
    this.value = data;
    this.searchService.search(data)
      .subscribe(response => {
        this.loading = false;
        this.data = response["results"];
      })
  }

  loading = false;
  data = [];
  columns = [
    { field: 'mal_id', title: 'Id', visible: true },
    { field: 'image_url', title: 'Image', visible: true, type: "image", width: "90" },
    { field: 'type', title: 'Tipo', visible: true },
    { field: 'title', title: 'Titulo', visible: true },
    { field: 'synopsis', title: 'Sinpsis', visible: true },
    { field: 'rated', title: 'Puntuacion', visible: true },
    { field: 'episodes', title: 'Capitulos', visible: true },
  ];
}
