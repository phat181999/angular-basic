import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './serve.component.html',
  styles: [
    `
      .online {
        color: blue;
      }
    `,
  ],
})
export class Servecomponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    //  was called one this component is created
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
