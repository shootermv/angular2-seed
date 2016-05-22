import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {LoginComponent} from '../../login/index';
import {RegisterComponent} from '../../register/index';
@Component({
  selector:'pages',
  templateUrl: 'app/pages/components/pages.component.html',
  styleUrls: ['app/pages/components/pages.component.css'],
  directives: [
  LoginComponent,
  RegisterComponent, 
  CORE_DIRECTIVES, 
  ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent
  }  
])
export class PagesComponent {}