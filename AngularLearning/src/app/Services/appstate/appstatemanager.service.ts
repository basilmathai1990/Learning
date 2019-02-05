import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstatemanagerService {
  private _state$ = new BehaviorSubject({});
  state$ = this._state$.asObservable();

  constructor() { }

  get state() {
    return this._state$.getValue();
  }

  setState(key: string, value: any){
    this[key] = value;
    return this._state$.next(this);
  }
  getCurrentDateTime(){
    let today = new Date();
    return [today.getMonth() + 1, today.getDate(), today.getFullYear()].join('/') + ' ' +
      [today.getHours(), today.getMinutes(), today.getSeconds()].join(':');
  }
}

