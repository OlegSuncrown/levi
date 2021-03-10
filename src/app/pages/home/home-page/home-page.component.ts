import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users$: Observable<any>;
  posts$: Observable<any>;

  length = 10;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private dataService: DataService
    ) { }
    
    ngOnInit(): void {
      this.users$ = this.dataService.loadData('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10')
      this.posts$ = this.dataService.loadData('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
    }

    handlePageEvent(event: PageEvent) {
      const { pageSize, pageIndex } = event
      const url = `${this.url}?_start=${pageIndex * pageSize}&_limit=${pageSize}`
      this.users$ = this.dataService.loadData(url)
      console.log(event)
      this.length = event.length;
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }

}
