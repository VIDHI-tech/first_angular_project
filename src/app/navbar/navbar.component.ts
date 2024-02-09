import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public navrouting: Router ){
  }

  navigatepage(path: string): void{
    console.log(this.navrouting)
   this.navrouting.navigateByUrl(path)
   
  }
}
