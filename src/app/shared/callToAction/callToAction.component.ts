import { Component, OnInit, Input } from '@angular/core';
import { LetsTalkComponent } from '../../shared/letsTalk/letsTalk.component';

interface Call{
  title;
  subTitle;
}

@Component({
  selector: 'callToAction-section',
  templateUrl: './callToAction.component.html',
  styleUrls: ['./callToAction.component.scss'],
  providers: [ LetsTalkComponent ]
})
export class CallToActionComponent implements OnInit {
  public title:string = 'Need more information?';
  public subTitle:string = 'Don’t wait!';
  @Input('call') public call:Call;

  constructor(
    private letsTalkComponent : LetsTalkComponent,
  ) { }

  letsTalk(){
    this.letsTalkComponent.letsTalk();
  }

  ngOnInit() {
    if(this.call){
      this.title    = this.call.title;
      this.subTitle = this.call.subTitle;
    }
  }

}
