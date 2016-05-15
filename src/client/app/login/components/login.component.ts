import {Component} from 'angular2/core';
import {ComponentInstruction, Router, Location, OnActivate} from 'angular2/router';
@Component({
  templateUrl: 'app/login/components/login.component.html',
  styleUrls: ['app/login/components/login.component.css']
})
export class LoginComponent {
  constructor(public router: Router) {}
  login() {
   this.router.navigateByUrl('/layout');
  }
}