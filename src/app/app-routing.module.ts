import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { ProfilComponent } from './profil/profil.component';
import { RoleListComponent } from './role-list/role-list.component';
import { SignupComponent } from './signup/signup.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { UserListComponent } from "./user-list/user-list.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routeGuard } from './route.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent, canActivate: [routeGuard]},
  {path:"home", component:HomeComponent},
  {path:"lesson/:id", component:LessonDetailsComponent, canActivate: [routeGuard]},
  {path:"module/:id", component:ModuleDetailsComponent, canActivate: [routeGuard]},
  {path:"permissions", component:PermissionListComponent, canActivate: [routeGuard]},
  {path:"profil/:id", component:ProfilComponent, canActivate: [routeGuard]},
  {path:"roles", component:RoleListComponent, canActivate: [routeGuard]},
  {path:"signup", component:SignupComponent, canActivate: [routeGuard]},
  {path:"training/:id", component:TrainingDetailsComponent, canActivate:[routeGuard]},
  {path:"trainings", component:TrainingListComponent, canActivate:[routeGuard]},
  {path:"users", component:UserListComponent, canActivate:[routeGuard]},
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
