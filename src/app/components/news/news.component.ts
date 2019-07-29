import { Component, OnInit } from '@angular/core';
import { LetsTalkComponent } from '../../shared/letsTalk/letsTalk.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [ LetsTalkComponent ]
})
export class NewsComponent implements OnInit {

  constructor(private letsTalkComponent : LetsTalkComponent) { }

  letsTalk(){
    this.letsTalkComponent.letsTalk();
  }

  ngOnInit() {
  }

}
