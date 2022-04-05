import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.page.html',
  styleUrls: ['./cover.page.scss'],
})
export class CoverPage implements OnInit {

  title = [
    {
      title: "Book Title",
      url: "/coverpage"
    } 
  ]
  constructor() { }

  ngOnInit() {
  }

}
