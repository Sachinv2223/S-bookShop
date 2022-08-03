import { Component, OnInit } from '@angular/core';
import { registrationForm } from 'src/app/types/regDetails';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regForm: registrationForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  isPasswordMatched: boolean = false;

  submitReg() {
    // console.log(this.regForm)
    if (this.regForm.password === this.regForm.confirmPassword) {

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.regForm.email, this.regForm.password)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    else {

    }
  }

}
