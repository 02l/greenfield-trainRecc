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

import { ApiService } from './song-form/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule.forRoot([{
        path: '', component: HomeComponent
      }, {
        path: 'songForm', component: SongFormComponent
      }])
=======
    RouterModule.forRoot([
      {path: '', component: HomeComponent}
    ]),
    MaterialModule.forRoot()
>>>>>>> getting material working
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
