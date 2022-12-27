import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-auth/login/login.component';
import { HomepageComponent } from './user-auth/homepage/homepage.component';
import { PageNotFoundComponent } from './user-auth/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmpComponent } from './user-auth/add-emp/add-emp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    PageNotFoundComponent,
    AddEmpComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
