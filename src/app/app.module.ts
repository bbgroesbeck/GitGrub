import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { AlertModule } from 'ng2-bootstrap';
import { FavoritesComponent } from "./Favorites/favorites.component";
import { AboutComponent } from "./About/about.component";
import { RecipeService } from "./Favorites/recipe.service";
import {ToasterModule, ToasterService} from 'angular2-toaster';



// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBVR8A-Mawq6aJiudG-i1Aes_dVf3JTovw",
  authDomain: "recip-311bc.firebaseapp.com",
  databaseURL: "https://recip-311bc.firebaseio.com",
  storageBucket: "recip-311bc.appspot.com",
  messagingSenderId: "779087682601"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    FavoritesComponent,
    AboutComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    AlertModule.forRoot(),
    ToasterModule
  ],
  providers: [AuthGuard, RecipeService],
  bootstrap: [AppComponent,]
})

export class AppModule { }
