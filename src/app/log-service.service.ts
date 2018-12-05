import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
  now = new Date();

  constructor() { }
  logService() {
    console.log('[Log service]' + this.now);
  }
}
