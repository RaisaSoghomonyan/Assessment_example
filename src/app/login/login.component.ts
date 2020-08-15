import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';
import {MyValidators} from '../shared/validators/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }
  ngOnInit(): void {
     this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6), MyValidators.restrictedUserNames]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isErrorState(control: FormControl): boolean {
   return !!(control && control.invalid && (control.dirty || control.touched ));
  }
  get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  onSubmit(): void{
    if (this.loginForm.invalid){
      return;
    }

    if (this.auth.login(this.userName.value, this.password.value)){
      this.router.navigate(['./home']);
      this.login = true;
    }

  }





}
