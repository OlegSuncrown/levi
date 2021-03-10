import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module'
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomePageComponent, UserListComponent, PostListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class HomeModule { }
