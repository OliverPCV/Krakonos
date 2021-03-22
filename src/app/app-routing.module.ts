import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';
import {RegistraceComponent} from './registrace/registrace.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user', component: UserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registrace', component: RegistraceComponent},


  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
