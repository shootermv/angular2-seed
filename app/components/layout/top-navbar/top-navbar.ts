import {Component} from 'angular2/core';
import {TriggerResize} from '../layout-components/trigger-resize/trigger-resize';

@Component({
  selector: 'top-navbar',
  templateUrl: './components/layout/top-navbar/top-navbar.html',
  directives: [TriggerResize]
})
export class TopNavbarCmp {
}
