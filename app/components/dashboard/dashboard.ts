import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NowCmp} from '../common/now/now';
import {FlotCmp} from '../common/flot/flot';

@Component({
  selector: 'dashboard',
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [CORE_DIRECTIVES, NowCmp, FlotCmp]
})
export class DashboardCmp {}
