import {Component} from 'angular2/core';

@Component({
  selector: '[trigger-resize]',
  templateUrl: 'app/components/trigger-resize/trigger-resize.html'
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
