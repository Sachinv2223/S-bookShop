import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { loginForm } from '../types/auth';
import { registrationForm } from '../types/regDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated: boolean = false;

  isLoading: boolean = false;

  login(logForm: loginForm) {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, logForm.email, logForm.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
        this.isAuthenticated = true;
        alert('Login succesffully..');
        setTimeout(() => {
          this.router.navigate([''])
        }, 250)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('Credentials doesnot match')
      }).finally(() => (this.isLoading = false));
  }

  register(regForm: registrationForm) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, regForm.email, regForm.password)
      .then((userCredential) => {
        console.log(userCredential)
        alert('Registered successfully');
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 250)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('Something went wrong')
        alert('Something went wrong')
      }).finally(() => (this.isLoading = false));
  }

  logout() {
    if (confirm('Do you want to logout?')) {
      this.isAuthenticated = false;
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        alert('Logout Successfull');
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 250)
      }).catch((error) => {
        // An error happened.
        alert('Logout Unsuccessfull')
      });
    }
  }
}
