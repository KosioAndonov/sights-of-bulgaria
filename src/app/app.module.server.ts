import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-aj3THVgL_pxEVY8vkhQ1Zrd9J-2MKzg",
  authDomain: "sights-of-bulgaria.firebaseapp.com",
  databaseURL: "https://sights-of-bulgaria-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sights-of-bulgaria",
  storageBucket: "sights-of-bulgaria.appspot.com",
  messagingSenderId: "581521937997",
  appId: "1:581521937997:web:29dd261ee09a8bc8636e04",
  measurementId: "G-7CCW07D0D0"
};

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
