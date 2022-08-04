import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logForm: loginForm = {
    email: '',
    password: ''
  }

  submitLogin() {
    console.log(this.logForm)
    this.authService.login(this.logForm);

    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, this.logForm.email, this.logForm.password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     // const user = userCredential.user;
    //     // ...
    //     alert('Login succesffully..')
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert('Credentials doesnt match')
    //   }).finally(() => (this.isLoading = false))
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
