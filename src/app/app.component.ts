import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MeanAssig';

  constructor(private authServices: AuthService) {

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCsaQtUVayGKK2dFPPfEnxctytfG-awBmQ",
      authDomain: "assigment-8817d.firebaseapp.com"
    });
  }
}
