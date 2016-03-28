import {Component, ElementRef, Input, AfterViewInit} from 'angular2/core';

@Component({
  selector: 'flot',
  template: `<div>loading</div>`

})

export class FlotCmp{

  private dataPlotted:any;
  static chosenInitialized = false;
  
  @Input() private  options: any;
  @Input() private  dataset:any;
  @Input() private  width:string= '100%';
  @Input() private  height:string = '220';
      
  constructor(public el: ElementRef) {}

  ngOnInit() {
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
  ngDoCheck() {
    if(this.dataset[0].data !== null && !this.dataPlotted) {
        console.log('plotting data');
        let plotArea = $(this.el.nativeElement).find('div').empty();
        $.plot( plotArea, this.dataset, this.options);    
        this.dataPlotted = true; 
    }
  }  
}
