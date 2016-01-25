import {Component, ElementRef, Input, AfterViewInit} from 'angular2/core';

@Component({
  selector: 'flot',
  template: `<div>loading</div>`

})

export class FlotCmp  implements AfterViewInit{


  static chosenInitialized = false;
  
  @Input() private  options: any;
  @Input() private  dataset:any;
  @Input() private  width:string;
  @Input() private  height:string;

  constructor(public el: ElementRef) {}

  ngAfterViewInit() {
      if(!FlotCmp.chosenInitialized) {
        let plotArea = $(this.el.nativeElement).find('div').empty();
        plotArea.css({
            width: this.width,
            height: this.height
        });
        $.plot( plotArea, this.dataset, this.options);
        FlotCmp.chosenInitialized = true;
      }
  }
}
