import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedin:boolean=false

  constructor() { }

  addtolocal(name:string,role:string):void{
      if(localStorage.getItem("auth")){
        this.isloggedin=true
      }
      else{
        localStorage.setItem("auth",JSON.stringify({name:name,role:role}))
        this.isloggedin=true
      }
  }
}
