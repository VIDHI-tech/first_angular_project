import { Component } from '@angular/core';
import { ApisrvcService } from '../apisrvc.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  data:{}={}

 constructor(public apisrvc:ApisrvcService){}

 getdata() {
  this.apisrvc.apifun().subscribe({
    next:(result)=>{
      this.data=result
    },
    error:(err)=>{
      console.log(err);
    }
  })
  }
}
