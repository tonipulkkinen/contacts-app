import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {

  cordovaReady: boolean;

  constructor() {
    document.addEventListener('deviceready', () => {
      console.log('device ready');
      this.cordovaReady = true;
    }, false);
  }

  public vibrate(time?: number) {
    if(this.cordovaReady) {
      navigator.vibrate(time || 100);
    }
  }

}
