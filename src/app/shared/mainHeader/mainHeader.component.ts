import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LetsTalkComponent } from '../letsTalk/letsTalk.component';
import { fadeInLeft, fadeIn } from '../animations/animations.component';

enum BtnColor{
  green  = "btn-success",
  blue   = "btn-primary",
  yellow = "btn-warning",
  red    = "btn-danger",
}

interface MainHeader{
  title;
  slogan;
  btnColor;
}

@Component({
  selector: 'app-main-header',
  templateUrl: './mainHeader.component.html',
  styleUrls: ['./mainHeader.component.scss'],
  providers: [ LetsTalkComponent ],
  animations:[fadeInLeft, fadeIn]
})
export class MainHeaderComponent implements OnInit {
  public sectionTitle:string      = 'Digital Transformation'
  public sectionSlogan:string     = 'Helping your business to be more agile and competitive – create and grow faster'
  public btnState:boolean         = false;
  public sectionBtnColor:BtnColor = BtnColor.blue;
  public section:string;

  @Input('sectionHeader') public sectionHeader:MainHeader;

  constructor(
    private letsTalkComponent : LetsTalkComponent,
    private router : Router) { }

  letsTalk(){
    this.letsTalkComponent.letsTalk();
  }

  ngOnInit(){
    if(this.sectionHeader){
      this.sectionTitle    = this.sectionHeader.title;
      this.sectionSlogan   = this.sectionHeader.slogan;

      if(this.sectionHeader.btnColor !== 'none'){
        this.btnState = true;
        this.sectionBtnColor = (this.sectionHeader.btnColor == 'blue')?BtnColor.blue : (this.sectionHeader.btnColor == 'green')?BtnColor.green : (this.sectionHeader.btnColor == 'yellow')?BtnColor.yellow : BtnColor.red;
      }
    }
    this.section = (this.router.url.split('/')[1])?this.router.url.split('/')[1]:'home';
  }

}
