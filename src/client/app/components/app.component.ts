import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NameListService} from '../shared/index';
import {WidgetsCmp} from '../widgets/widgets';
import {DashboardCmp} from '../dashboard/dashboard';
import {Preloader} from '../common/preloader/preloader';
import {LayoutComponent} from '../layout/index';
import {PagesComponent} from '../pages/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, Preloader, WidgetsCmp, DashboardCmp]
})
@RouteConfig([
  {
    path: '/layout/...',
    name: 'Layout',
    component: LayoutComponent
  },
  {
    path: '/pages/...',
    name: 'Pages',
    component: PagesComponent
  },
  {
    path: '/**',
    redirectTo: ['Layout']
  }
])
export class AppComponent {}
