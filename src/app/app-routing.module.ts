import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mainpage/about/about.component';
import { HomeComponent } from './mainpage/home/home.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path: '',component: MainpageComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
