import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-bugs',
  templateUrl: './open-bugs.component.html',
  styleUrls: ['./open-bugs.component.css']
})
export class OpenBugsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
    header : {
      title : 'Open Bugs',
      strapline : 'Active Projects with Errors'
    },
    content : ''
  };
}