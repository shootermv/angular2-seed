import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'dashboard',
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [CORE_DIRECTIVES]
})
export class DashboardCmp {}
