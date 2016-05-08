import {Component} from 'angular2/core';
import {TriggerResize} from '../trigger-resize/trigger-resize';

@Component({
  selector: 'top-navbar',
  templateUrl: 'app/layout/components/top-navbar/top-navbar.html',
  directives: [TriggerResize]
})
export class TopNavbarCmp {
}
