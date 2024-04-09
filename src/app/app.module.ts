import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AboutComponent } from './about/about.component';
import { CommunityComponent } from './community/community.component';
import { NotFoundComponent } from './not-found/not-found.component';



import { HttpClientModule } from '@angular/common/http';
import { CurrentSightComponent } from './current-sight/current-sight.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';


// const firebaseConfig = {
//   apiKey: "AIzaSyC-aj3THVgL_pxEVY8vkhQ1Zrd9J-2MKzg",
//   authDomain: "sights-of-bulgaria.firebaseapp.com",
//   databaseURL: "https://sights-of-bulgaria-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "sights-of-bulgaria",
//   storageBucket: "sights-of-bulgaria.appspot.com",
//   messagingSenderId: "581521937997",
//   appId: "1:581521937997:web:a7b07dee60954038636e04",
//   measurementId: "G-TLV5FXT45R"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewReviewComponent,
    AboutComponent,
    CommunityComponent,
    NotFoundComponent,
    CurrentSightComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    UserRoutingModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
