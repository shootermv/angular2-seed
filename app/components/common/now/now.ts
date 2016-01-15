import {Component, Input} from 'angular2/core';

@Component({
  selector: 'now',
  template: `
      {{date | date: _format}}
    `
})

export class NowCmp {
  private date;
  
  @Input() set format(formatName:string){
     this._format = formatName;
   
  }
  constructor() {    
    this.date =  new Date();
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

}
