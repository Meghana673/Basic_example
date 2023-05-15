import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { CandeactivateGuard } from './candeactivate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SignupComponent } from './signup/signup.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentlistComponent},
  {path:'parent',component:ParentComponent },
  {path:'forms/template',component:TemplateFormsComponent,canDeactivate:[CandeactivateGuard]},
  {path:'forms/reactive',component:ReactiveFormsComponent},
  {path:'crud',component:AddComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
