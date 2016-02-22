import {Directive, Input, HostBinding, ElementRef} from 'angular2/core';
@Directive({selector: '[collapse]'})
export class CollapseCmp {

  @HostBinding('class.collapsing')
  private isCollapsing:boolean;

    // style
  @HostBinding('style.height')
  private height:string;
  private h:string;

  @Input()
  private set collapse(value:boolean) {
    if(value!==undefined) {
      if (value) {
        this.hide();
      } else {
        this.show();
      }
    }
    //
  }
  constructor(public el: ElementRef) {}
  measureHeight() {
    let elem = this.el.nativeElement;
    //lets be sure the element has display:block style
    elem.className = elem.className.replace('collapse', '');
    this.h = elem.scrollHeight;

  }
  hide() {
    this.measureHeight();
    this.height = this.h + 'px';
    setTimeout(() => {
        this.height = '0px';
        this.isCollapsing = true;//apply 'collapsing' class
    },1);
  }
  show() {
    this.height = '0px';
    setTimeout(() => {
        this.height = this.h + 'px';
        this.isCollapsing = true;//apply 'collapsing' class
    },1);
  }

}
