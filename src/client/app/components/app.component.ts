import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NameListService} from '../shared/index';
import {TopNavbarCmp} from './top-navbar/top-navbar';
import {SideBarCmp} from './sidebar/sidebar';
import {WidgetsCmp} from '../widgets/widgets';
import {DashboardCmp} from '../dashboard/dashboard';
import {Preloader} from '../common/preloader/preloader';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, Preloader, SideBarCmp, TopNavbarCmp, WidgetsCmp, DashboardCmp]
})
@RouteConfig([
  { path: '/', component: DashboardCmp, as: 'Dashboard' },
  { path: '/dashboard', component: DashboardCmp, as: 'Dashboard' },
  { path: '/widgets', component: WidgetsCmp, as: 'Widgets' }
])
export class AppComponent {}
