import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoState } from '../state/todo.state';
import { Store } from '@ngrx/store';
import { userModel } from '../state/todo.model';
import { getUser } from '../state/todo.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  showPassword: boolean = false; 
  userData!: userModel;
  isLoggedIn: string = '';
  loginMessage: string = '';

  constructor(private fb: FormBuilder, private store: Store<ToDoState>, private router: Router) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.store.select(getUser).subscribe(user => {
      this.userData = user;
    });
  }
    
 login(){
  if (this.loginForm.valid) {
    if(this.loginForm.value.email === this.userData.email && this.loginForm.value.password === this.userData.password){
      this.isLoggedIn = 'yes';
      this.loginMessage = "Login Successful!";
      setTimeout(() => {
        this.router.navigate(['/todo']);
      }, 500);
    }else{
      this.isLoggedIn = 'no';
      this.loginMessage = "Invalid Credentials!";
    }
  }
 }
 
 togglePassword(): void {
  this.showPassword = !this.showPassword;
 }
 
}
