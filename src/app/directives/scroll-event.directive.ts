import { Directive, Output, EventEmitter, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
// import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[appScroll]'
})
export class ScrollEventDirective implements OnDestroy {
  @Output() scrollPosition: EventEmitter<number> = new EventEmitter<number>();

  private scrollEvent$;

  constructor(private el: ElementRef) {
    // fromEvent(window, 'scroll').subscribe(() => this.manageScrollEvent());
    this.scrollEvent$ = fromEvent(this.el.nativeElement,
    'scroll').subscribe((e: any) => {
      this.scrollPosition.emit(e.target.scrollTop);
    });
  }

  ngOnDestroy(){
    this.scrollEvent$.unsubscribe();
  }

}
