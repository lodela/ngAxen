import { Component, OnInit, TemplateRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { LetsTalkComponent } from '../letsTalk/letsTalk.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers:[ LetsTalkComponent ]
})
export class NavComponent implements OnInit {
  public navbarOpen:boolean = false;
  public innerWidth: any;
  public scrollValue:number = 0;

  constructor(
    private letsTalkComponent : LetsTalkComponent
  ) {}

  letsTalk(){
    this.letsTalkComponent.letsTalk();
  }

  toggleNavbar() {
    this.innerWidth <= 991? this.navbarOpen = !this.navbarOpen : '';
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  @HostListener("window:scroll", ['$event'])
  private handleScroll($event:Event):void{
    this.scrollValue = Math.round($event.srcElement.children[0].scrollTop);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}
