import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedService } from 'src/app/services/activated.service';
import { finalize, catchError } from 'rxjs/operators';
import { throwError, Observable} from 'rxjs';

import { Post } from 'src/app/models/post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  spinner = true;
  error = '';
  url = 'https://jsonplaceholder.typicode.com/posts'
  
  // Pagination properties
  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20];
  showFirstLastButtons = false;

  constructor(
    private dataService: DataService,
    public activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  fetchPosts() {
    const url = `${this.url}?_start=${this.pageIndex * this.pageSize}&_limit=${this.pageSize}`
    this.posts$ = this.dataService.loadData(url).pipe(
      catchError(err => {
        this.error = 'Could not load posts' 
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
    this.fetchPosts()
  }

  handleClick(post: Post) {
    const isSelected = this.activatedService.isPostSelected(post.id)
    if (isSelected) {
      this.activatedService.deletePost(post.id)
    } else {
      this.activatedService.addPost(post)
    }
  }

}
