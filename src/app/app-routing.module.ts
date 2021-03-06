import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TodoComponent } from './todo/todo.component';
import { AddItemComponent } from './todo/add-item/add-item.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth/auth.guard';
import {SocialComponent} from "./auth/social/social.component";

const routes: Routes = [
  { path: '', component: TodoComponent, canActivate: [ AuthGuard ] },
  { path: 'create', component: AddItemComponent, canActivate: [ AuthGuard ] },
  { path: 'edit/:itemId', component: AddItemComponent, canActivate: [ AuthGuard ] },
  { path: 'settings', component: SettingsComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'social-login', component: SocialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
