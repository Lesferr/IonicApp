import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    }
  constructor() { }

  ngOnInit() {
  }

}
