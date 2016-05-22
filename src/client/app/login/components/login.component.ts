import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ComponentInstruction, Router, Location, OnActivate} from 'angular2/router';
import {UserService} from '../../shared/services/user.service';
@Component({
  selector:'login',
  templateUrl: 'app/login/components/login.component.html',
  styleUrls: ['app/login/components/login.component.css'],
  providers: [ HTTP_PROVIDERS, UserService]
})
export class LoginComponent {
  constructor(private userService: UserService, public router: Router) {}
  login(event:any, useremail:string, password:string) {
     this.userService.login( useremail, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['Layout']);
      }
    });
   //this.router.navigateByUrl('/layout');
  }
}