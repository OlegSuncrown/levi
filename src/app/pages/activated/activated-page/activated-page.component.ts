import { Component, OnInit} from '@angular/core';
import { ActivatedService } from 'src/app/services/activated.service';

@Component({
  selector: 'app-activated-page',
  templateUrl: './activated-page.component.html',
  styleUrls: ['./activated-page.component.scss']
})
export class ActivatedPageComponent implements OnInit {
  users$: any;
  posts$: any;
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
