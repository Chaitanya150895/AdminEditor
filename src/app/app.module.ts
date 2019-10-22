//@angular
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

//AdminLte
import { MainHeaderComponent } from './home/main/main-header/main-header.component';
import { MainSidebarComponent } from './home/main/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './home/main/main-footer/main-footer.component';
import { ContentWrapperComponent } from './home/main/content-wrapper/content-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './home/main/main.component';

//users
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { LoginPageComponent } from './users/login-page/login-page.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';

//pipes
import { PipeTransformPipe } from './pipe-transform.pipe';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { NeedAuthGuard } from './auth.guard';
import { BoolPipe } from './bool.pipe';



@NgModule({
  declarations: [
    //App
    AppComponent,

    //AdminLte
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    DashboardComponent,
    MainComponent,
    ContentWrapperComponent,
    
    //Users
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    LoginPageComponent,
    ForgotPasswordComponent,

    
    //pipes
    PipeTransformPipe,
    ReplaceUnderscorePipe,
    ReplaceUnderscorePipe,
    BoolPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DropDownListModule,
    DateTimePickerModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
