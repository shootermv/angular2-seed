import {Component} from 'angular2/core';
import {TriggerResize} from 'app/components/trigger-resize/trigger-resize';

@Component({
  selector: 'top-navbar',
  templateUrl: 'app/components/top-navbar/top-navbar.html',
  directives: [TriggerResize]
})
export class TopNavbarCmp {
}
