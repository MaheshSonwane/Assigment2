import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authServic: AuthService) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    const email = form.value.email;
    const pwd = form.value.pwd;
    this.authServic.signInUser(email, pwd);
  }
}
