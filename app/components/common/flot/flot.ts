import {Component, ElementRef, Input} from 'angular2/core';
import {EmitterService} from '../../../services/emitterService';
@Component({
  selector: 'flot',
  template: `<div>loading</div>`

})

export class FlotCmp {

  private chosenInitialized = false;
  private emitter:any;

  @Input() private  options: any;
  @Input() private  dataset:any;
  @Input() private  width:string= '100%';
  @Input() private  height:string = '220';

  constructor(public el: ElementRef) {}

  ngOnInit() {
      if(!this.chosenInitialized) {
        let plotArea = $(this.el.nativeElement).find('div').empty();
        plotArea.css({
            width: this.width,
            height: this.height
        });

        $.plot( plotArea, this.dataset, this.options);
        this.chosenInitialized = true;
        this.emitter = EmitterService.get('channel_1');
        this.emitter.subscribe(msg => {
            console.log('MESSAGE:',msg);
            $.plot( plotArea, this.dataset, this.options);

        });
      }
  }

}
