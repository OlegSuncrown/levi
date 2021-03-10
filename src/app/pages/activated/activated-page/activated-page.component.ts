import { Component, OnInit} from '@angular/core';
import { ActivatedService } from 'src/app/services/activated.service';

@Component({
  selector: 'app-activated-page',
  templateUrl: './activated-page.component.html',
  styleUrls: ['./activated-page.component.scss']
})
export class ActivatedPageComponent implements OnInit {
  users$: any;
  displayedColumns: string[] = ['position', 'name', 'username', 'email'];

  constructor(
    private activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    this.users$ = this.activatedService.getSelectedUsers$()
  }

}
