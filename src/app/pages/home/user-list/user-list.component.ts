import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedService } from 'src/app/services/activated.service';
import { finalize, catchError } from 'rxjs/operators';
import { throwError, Observable} from 'rxjs';

import { User } from 'src/app/models/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;
  spinner = true;
  error = '';
  url = 'https://jsonplaceholder.typicode.com/users'
  
  // Pagination properties
  length = 10;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10];
  showFirstLastButtons = false;

  constructor(
    private dataService: DataService,
    public activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers() {
    const url = `${this.url}?_start=${this.pageIndex * this.pageSize}&_limit=${this.pageSize}`
    this.users$ = this.dataService.loadData(url).pipe(
      catchError(err => {
        this.error = 'Could not load users' 
        return throwError(err);
    }),
      finalize(() => {
        this.spinner = false
      })
    )
  }

  handlePageEvent(event: PageEvent) {
    const { pageSize, pageIndex, length } = event
    this.length = length;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
    this.fetchUsers()
  }

  handleClick(user: User) {
    const isSelected = this.activatedService.isUserSelected(user.id)
    if (isSelected) {
      this.activatedService.deleteUser(user.id)
    } else {
      this.activatedService.addUser(user)
    }
  }
}
