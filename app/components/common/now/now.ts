import {Component, Input, Attribute, ElementRef} from 'angular2/core'

@Component({
  selector: 'now',
  template: `
      {{date | date: format}}
    `
})

export class NowCmp {
  private date;
  private format;
  constructor(@Attribute("format") format, myElement: ElementRef) { 
    this.format = format;
    this.date =  new Date(); 
    let that= this;
    setInterval(() => {
        that.date =  new Date();
     }, 1000);
  } 

}
