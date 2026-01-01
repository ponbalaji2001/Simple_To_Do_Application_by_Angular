import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoState } from '../state/todo.state';
import { Store } from '@ngrx/store';
import { userModel } from '../state/todo.model';
import { getUser } from '../state/todo.selectors';
import { Router } from '@angular/router';
import { setAuthToken } from '../state/todo.actions';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  showPassword: boolean = false; 
  loginMessage: string = '';
  userData$!: Observable<userModel>;
  showAlert: boolean = false;

  constructor(private fb: FormBuilder, private store: Store<ToDoState>, private router: Router) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.userData$ = this.store.select(getUser); 
  }

 login() {

  if(this.loginForm.valid) {
    this.userData$.pipe(take(1)).subscribe(user => {
    const { email, password } = this.loginForm.value;

      if (email === user.email && password === user.password) {
        const token = this.generateToken();
        this.store.dispatch(setAuthToken({ token }));
        this.loginMessage = 'Login Successful!';
        setTimeout(() => this.router.navigate(['/todo']), 200);
      } else {
        this.loginMessage = 'Invalid Credentials!';
      }
    });

    this.showAlert = true;
  }else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });

      this.showAlert = false;
  }

  }

 generateToken(length: number = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}
 
 togglePassword(): void {
  this.showPassword = !this.showPassword;
 }
 
}
