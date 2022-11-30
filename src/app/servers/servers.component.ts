import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers-app',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServerAppComponent {
  check: boolean = false;
  serverStatus: string = 'no  server was created';
  serverEvent: string = 'hello world';

  constructor() {
    setTimeout(() => {
      this.check = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverStatus = 'Server was created, Name is' + this.serverEvent;
  }

  onUpdateServerName(event: Event) {
    console.log(event, 'event');
    this.serverEvent = (<HTMLInputElement>event.target).value;
  }
}
