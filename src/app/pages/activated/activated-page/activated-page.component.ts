import { Component, OnInit} from '@angular/core';
import { ActivatedService } from 'src/app/services/activated.service';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user.model'
import { Post } from 'src/app/models/post.model'

@Component({
  selector: 'app-activated-page',
  templateUrl: './activated-page.component.html',
  styleUrls: ['./activated-page.component.scss']
})
export class ActivatedPageComponent implements OnInit {
  users$: Observable<User[]>;
  posts$: Observable<Post[]>;

  userColumns: string[] = ['position', 'name', 'username', 'email'];
  postColumns: string[] = ['position', 'userId', 'title'];
  constructor(
    private activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    this.users$ = this.activatedService.getSelectedUsers$()
    this.posts$ = this.activatedService.getSelectedPosts$()
  }

}
