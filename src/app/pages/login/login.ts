import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = "";
  password: string = "";
  user: any = {};


   constructor(private route:Router){}
  login() {

    this.user = JSON.parse(sessionStorage.getItem('userDetails') || "{}");

    // ✅ Check empty fields FIRST
    if (!this.email || !this.password) {
      alert("Please fill the form");
      return;
    }

    // ✅ Check email
    if (this.email === this.user.email) {

      // ✅ Check password
      if (this.password === this.user.password) {
        alert("Login Successful ...");
        this.route.navigateByUrl('/dashboard')
      } else {
        alert("Password Mismatch");
      }

    } else {
      alert("Login Failed");
    }
  }
}