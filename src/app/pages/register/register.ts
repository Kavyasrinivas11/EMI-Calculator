import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  user:any={
    username:"",
    email:"",
    password:"",
    confirm_password:""
  }

   constructor(private route:Router){}
  register(){
    if(this.user.username && this.user.email && this.user.password && this.user.confirm_password){
      if(this.user.password===this.user.confirm_password){
    alert("Registration Successful ...")
    this.route.navigateByUrl('/login')
    sessionStorage.setItem('userDetails',JSON.stringify(this.user))
    }
    else{
      alert("Password and Confirm Password does not match")
    }
  }
else{
    alert("Please fill the form")
}
  }

}
