import {Directive} from 'angular2/core';

@Directive({
  selector: '[trigger-resize]',
  host: {
    '(click)': 'onClickMe($event)'
  }
})
export class TriggerResize {
  onClickMe(event) {
   event.preventDefault();
   if (/aside-collapsed/.test(document.body.className) ) {
       document.body.className = document.body.className.replace(' aside-collapsed','');
   } else {
       document.body.className+=' aside-collapsed';
   }
  }
}
