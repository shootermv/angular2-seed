import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';


import {AboutCmp} from '../about/about';
import {WidgetsCmp} from '../widgets/widgets';
import {DashboardCmp} from '../dashboard/dashboard';
import {NameList} from '../../services/name_list';
import {TopNavbarCmp} from '../layout/top-navbar/top-navbar';
import {SideBarCmp} from '../layout/sidebar/sidebar';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, TopNavbarCmp, SideBarCmp, AboutCmp, WidgetsCmp]
})
@RouteConfig([
  { path: '/', component: DashboardCmp, as: 'Dashboard' },
  { path: '/dashboard', component: DashboardCmp, as: 'Dashboard' },
  { path: '/widgets', component: WidgetsCmp, as: 'Widgets' }
])
export class AppCmp {}
