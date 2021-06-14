import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { MaterialModule } from './material/material.module';
import { ManageBuayaHomeComponent } from './manage-buaya-home/manage-buaya-home.component';
import { ToggleButtonComponent } from './toggle-button.component';
import { DataService } from './service/data.service';
import { snackBar } from './utility/SnackBar';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ResetPasswordUrlComponent } from './Password-recovery/reset-password-url/reset-password-url.component'; // this includes the core NgIdleModule but includes keepalive providers for easy wireu
import { LogoutComponent } from './logout/logout.component';
import { SlideButtonComponent } from './slide-button/slide-button.component';
import { ToastrModule } from 'ngx-toastr';
import { ForgetPasswordComponent } from './Password-recovery/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    ManageBuayaHomeComponent,   
    ToggleButtonComponent,  
    ResetPasswordUrlComponent,
    LogoutComponent,
    SlideButtonComponent,
    ForgetPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [AuthService, AuthGuard, DataService, snackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }