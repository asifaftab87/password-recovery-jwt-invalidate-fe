import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ResetPasswordUrlComponent } from './Password-recovery/reset-password-url/reset-password-url.component';
import { ManageBuayaHomeComponent } from './manage-buaya-home/manage-buaya-home.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetPasswordComponent } from './Password-recovery/forget-password/forget-password.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'manageBuaya', component: ManageBuayaHomeComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },  
  { path: 'forgetPassword', component: ResetPasswordUrlComponent},
  { path: 'resetPassword', component: ForgetPasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
