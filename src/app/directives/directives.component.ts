import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  showDetail: boolean = false;
  log: any[] = [];
  day: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  handleShowSecrect() {
    this.showDetail = !this.showDetail;
    this.log.push(this.log.length + 1);
    this.day.push(new Date());
  }
}
