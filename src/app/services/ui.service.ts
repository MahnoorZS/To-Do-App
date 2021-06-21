import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
//this will help us to track the add task form.  
  private showAddTask: Boolean = false;
  //observables is an interface to manage asynchronous operations. returns a unicast value
  //subjects are multicast observables
  private subject = new Subject<any>();


  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
