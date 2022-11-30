import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  userName: any = '';

  constructor() {}

  ngOnInit(): void {}

  handleDisable() {
    this.userName === '';
  }

  handleReset() {
    this.userName = '';
    console.log(this.handleDisable() === this.userName, 'compare');
  }
}
