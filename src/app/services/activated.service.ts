import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/user.model'
import { Post } from 'src/app/models/post.model'

@Injectable({
  providedIn: 'root',
})

export class ActivatedService {

  private selectedUsers: User[] = [];
  private selectedUsers$ = new BehaviorSubject<User[]>([])

  private selectedPosts: Post[] = [];
  private selectedPosts$ = new BehaviorSubject<Post[]>([])

  constructor() { }
  
  getSelectedUsers$() {
    return this.selectedUsers$.asObservable()
  }

  isUserSelected(id: number ) {
    return this.selectedUsers.find(user => user.id === id)
  }

  addUser(user: User) {
    this.selectedUsers.push(user)
    this.selectedUsers$.next([...this.selectedUsers])
  }

  deleteUser(id: number) {
    this.selectedUsers = this.selectedUsers.filter(user => user.id !== id)
    this.selectedUsers$.next([...this.selectedUsers])
  }

  getSelectedPosts$() {
    return this.selectedPosts$.asObservable()
  }

  isPostSelected(id: number) {
    return this.selectedPosts.find(post => post.id === id)
  }

  addPost(post: Post) {
    this.selectedPosts.push(post)
    this.selectedPosts$.next([...this.selectedPosts])
  }

  deletePost(id: number) {
    this.selectedPosts = this.selectedPosts.filter(post => post.id !== id)
    this.selectedPosts$.next([...this.selectedPosts])
  }
}
