import {Component, ElementRef, AfterViewInit} from 'angular2/core';

@Component({
  selector: 'flot',
  template: `<div>hi</div>`
})

export class FlotCmp  implements AfterViewInit {
  private dataset;
  private options;
  private width = '100%';
  private height = 220;
  static flotInitialized = false;
  constructor(public el: ElementRef) {
       this.dataset = [{label: "line1",data:  [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]]}];
 
        this.options = {
            series: {
                lines: { show: true },
                points: {
                    radius: 3,
                    show: true
                }
            }
        };
        
        let plotArea = $(this.el.nativeElement).find('div');
        plotArea.css({
            width: this.width,
            height: this.height
        });
        $.plot( plotArea, this.dataset, this.options);

  }//end of constructor
  ngAfterViewInit() {
        if(!FlotCmp.flotInitialized) {

 
           FlotCmp.flotInitialized = true;
        }
    }
}
