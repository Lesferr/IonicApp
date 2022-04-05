import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Next",
      url: "/chapter2" 
    },
    {
      title: "Chapter 3 | The Middle",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Then",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | The Finale",
      url: "/chapter5"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
