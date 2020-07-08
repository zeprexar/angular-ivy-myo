import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp({
  apiKey: "AIzaSyB-GScpLDAeMLL14R5JwpChf8QGvOOYEpk",
  authDomain: "mayo-223f6.firebaseapp.com",
  databaseURL: "https://mayo-223f6.firebaseio.com",
  projectId: "mayo-223f6",
  storageBucket: "mayo-223f6.appspot.com",
  messagingSenderId: "1015078063727",
  appId: "1:1015078063727:web:2800616fc9c19ef3dd479a",
  measurementId: "G-QJZXR09PK4"
})],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
