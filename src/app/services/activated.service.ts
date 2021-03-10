import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ActivatedService {

  private selectedUsers: any = [];
  private selectedUsers$ = new BehaviorSubject<any>([])
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
}
