import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authguardGuard } from './authguard.guard';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,

  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   canActivate:[authguardGuard]
  // },
 
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // }
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
