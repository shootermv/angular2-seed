import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NameListService} from '../../shared/index';
import {TopNavbarCmp} from './top-navbar/top-navbar';
import {SideBarCmp} from './sidebar/sidebar';

import {DashboardCmp} from '../../dashboard/dashboard';
import {WidgetsCmp} from '../../widgets/widgets';

@Component({
  selector:'layout',
  templateUrl: 'app/layout/components/layout.component.html',
  styleUrls: ['app/layout/components/layout.component.css'],
  directives: [
  DashboardCmp,
  WidgetsCmp, 
  FORM_DIRECTIVES, 
  CORE_DIRECTIVES, 
  ROUTER_DIRECTIVES,
  SideBarCmp, 
  TopNavbarCmp
]
})


@RouteConfig([
  {
    
    path: '/',
    name: 'Dashboard',
    component: DashboardCmp,
    useAsDefault: true
  },
  {
    path: '/widgets',
    name: 'Widgets',
    component: WidgetsCmp
  }  
])


export class LayoutComponent {
  constructor() {}
}
