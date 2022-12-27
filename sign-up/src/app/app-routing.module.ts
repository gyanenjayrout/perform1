import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './user-auth/add-emp/add-emp.component';
import { HomepageComponent } from './user-auth/homepage/homepage.component';
import { LoginComponent } from './user-auth/login/login.component';
import { PageNotFoundComponent } from './user-auth/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'homepage',
    component : HomepageComponent
  },
  
  {
    path : '',
    redirectTo : 'login',
    pathMatch :'full'
  },
  {
    path : 'add-emp',
    component : AddEmpComponent
  },
  
  
  {
    path : '**',
    component : PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
