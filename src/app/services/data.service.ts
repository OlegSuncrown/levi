import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private isOpenSubject = new BehaviorSubject<boolean>(false);
  // isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  loadData(url) {
    return this.http.get<any>(url)
  }
  // setToClose() {
  //   this.isOpenSubject.next(false);
  // }
  
  // setToOpen() {
  //   this.isOpenSubject.next(true);
  // }

  // toggle() {
  //   this.isOpenSubject.next(!this.isOpenSubject.value);
  // }
}
