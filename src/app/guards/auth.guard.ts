import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getUser } from '../state/todo.selectors';
import { userModel } from '../state/todo.model';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(getUser).pipe(
      map((user: userModel | null) => {
        if (user?.token) {
          return true;
        } else {
          this.router.navigate(['/login']); 
          return false;
        }
      })
    );
  }
}
