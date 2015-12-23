import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {DashboardCmp} from '../dashboard/dashboard';
import {NameList} from '../../services/name_list';
import {TopNavbarCmp} from '../layout/top-navbar/top-navbar';


@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, TopNavbarCmp]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/dashboard', component: DashboardCmp, as: 'Dashboard' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {}
