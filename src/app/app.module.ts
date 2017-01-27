import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongFormComponent } from './song-form/song-form.component';

import { ApiService } from './services/api.service';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './login/form/form.component';
import { SignupComponent } from './login/signup/signup.component';
import { SignupService} from './login/signup/signup.service';
import { LoginService } from './login/form/login.service';
import { SearchComponent } from './search/search.component';
import { FavTrainsComponent } from './fav-trains/fav-trains.component';
import { GetTrainsService } from './services/get-trains.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongFormComponent,
    FormComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    FavTrainsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent, children: [
        { path: 'form', component: FormComponent },
        { path: 'signup', component: SignupComponent}
      ]},
      { path: 'songForm', component: SongFormComponent },
      {path: 'favtrains', component: FavTrainsComponent}
    ]),
    MaterialModule.forRoot()
  ],
  providers: [ApiService, SignupService, LoginService, GetTrainsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
