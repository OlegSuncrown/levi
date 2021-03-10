import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedService } from 'src/app/services/activated.service';

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

  isSelected = false
  constructor(
    private dataService: DataService,
    public activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    const url = `${this.url}?_start=${this.pageIndex * this.pageSize}&_limit=${this.pageSize}`
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

  handleClick(user) {
    this.isSelected = this.activatedService.isUserSelected(user.id)
    if(this.isSelected) {
      this.activatedService.deleteUser(user.id)
    } else {
      this.activatedService.addUser(user)
    }
  }
}
