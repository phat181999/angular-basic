import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './serve.component.html',
})
export class Servecomponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
