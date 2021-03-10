import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module'
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HomePageComponent, UserListComponent, PostListComponent, PhotoListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule
  ]
})
export class HomeModule { }
