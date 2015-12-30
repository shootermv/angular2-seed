import {Component} from 'angular2/core';

@Component({
  selector: '[trigger-resize]',
  templateUrl: './components/layout/layout-components/trigger-resize/trigger-resize.html'
})
export class TriggerResize {
  onClickMe(event) {
   event.preventDefault();
   /aside-collapsed/.test(document.body.className) ? document.body.className = document.body.className.replace(' aside-collapsed','') :  document.body.className+=' aside-collapsed';
  }
}
