import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { UserListComponent } from './user-list/user-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfilComponent,
    UserListComponent,
    TrainingDetailsComponent,
    ModuleDetailsComponent,
    LessonDetailsComponent,
    TrainingListComponent,
    RoleListComponent,
    PermissionListComponent,
    PageNotFoundComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
