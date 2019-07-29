import { Component, OnInit } from '@angular/core';
import { LetsTalkComponent } from '../../shared/letsTalk/letsTalk.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [ LetsTalkComponent ]
})
export class AboutUsComponent implements OnInit {

  constructor(private letsTalkComponent : LetsTalkComponent) { }

  letsTalk(){
    this.letsTalkComponent.letsTalk();
  }

  ngOnInit() {
  }

}
