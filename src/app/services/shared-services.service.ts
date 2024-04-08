import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  private isOpen = new BehaviorSubject(false);
  isOpen$ = this.isOpen.asObservable();

  toggle() {
    this.isOpen.next(!this.isOpen.value);
  }
}
