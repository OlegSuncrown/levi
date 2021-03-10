import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ActivatedService {

  private selectedUsers: any = [];
  private selectedUsers$ = new BehaviorSubject<any>([])

  private selectedPosts: any = [];
  private selectedPosts$ = new BehaviorSubject<any>([])

  constructor() { }
  
  getSelectedUsers$() {
    return this.selectedUsers$.asObservable()
  }

  isUserSelected(id) {
    return this.selectedUsers.find(user => user.id === id)
  }

  addUser(user) {
    this.selectedUsers.push(user)
    this.selectedUsers$.next([...this.selectedUsers])
  }

  deleteUser(id) {
    this.selectedUsers = this.selectedUsers.filter(user => user.id !== id)
    this.selectedUsers$.next([...this.selectedUsers])
  }

  getSelectedPosts$() {
    return this.selectedPosts$.asObservable()
  }

  isPostSelected(id) {
    return this.selectedPosts.find(post => post.id === id)
  }

  addPost(post) {
    this.selectedPosts.push(post)
    this.selectedPosts$.next([...this.selectedPosts])
  }

  deletePost(id) {
    this.selectedPosts = this.selectedPosts.filter(post => post.id !== id)
    this.selectedPosts$.next([...this.selectedPosts])
  }
}
