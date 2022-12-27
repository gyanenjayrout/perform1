import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/user-auth/login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [
    LoginComponent,
  ]
})
export class AuthModule { }
