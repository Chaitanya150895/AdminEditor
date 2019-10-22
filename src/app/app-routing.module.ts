import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//AdminLte
import { DashboardComponent } from './dashboard/dashboard.component';

//Users
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { LoginPageComponent } from './users/login-page/login-page.component';

//Dashboard

//Pipes
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [

  // { path: "", component: DashboardComponent },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'users', component: UserListComponent, canActivate: [NeedAuthGuard] },
      { path: 'users/edit/:userId', component: EditUserComponent, canActivate: [NeedAuthGuard] },
      { path: 'users/view/:userId', component: ViewUserComponent, canActivate: [NeedAuthGuard] },
    ], canActivate: [NeedAuthGuard]
  },

  { path: 'login', component: LoginPageComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
