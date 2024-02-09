import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public loginSrvc:LoginService,private router:Router){}

  name:string=''
  role:string=''

  navigatetopage():void{
    this.router.navigate(['/about'])
  }

  loginbtn() {
     this.loginSrvc.addtolocal(this.name,this.role)
     this.navigatetopage()
    }

}
