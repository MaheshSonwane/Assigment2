import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductService } from './product.service';
import { EditItemComponent } from './main-page/edit-item/edit-item.component';
import { DataStorageService } from './data-storage.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const appRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home' , component: MainPageComponent },
  {path:'edit', component: EditItemComponent },
  {path:'signin', component : SigninComponent },
  {path:'signup', component : SignupComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EditItemComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ProductService,AuthService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
