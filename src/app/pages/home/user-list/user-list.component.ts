import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<any>;
  length = 10;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10];
  showFirstLastButtons = false;
  url = 'https://jsonplaceholder.typicode.com/users'

  data = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const url = `${this.url}?_start=${this.pageIndex * this.pageSize}&_limit=${this.pageSize}`
    this.users$ = this.dataService.loadData(url)
  }

  findIncluded (id){
    return this.data.find(item => item.id === id)
  }

  fetchData(url) {
    this.users$ = this.dataService.loadData(url)
  }

  handlePageEvent(event: PageEvent) {
    const { pageSize, pageIndex, length } = event
    const url = `${this.url}?_start=${pageIndex * pageSize}&_limit=${pageSize}`
    this.users$ = this.dataService.loadData(url)
    this.length = length;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
  }

  handleClick(item) {
    if(this.findIncluded(item.id)) {
      this.data = this.data.filter((user) => {
       return user.id !== item.id
      })
    } else {
      this.data.push(item)
    }
  }
}
