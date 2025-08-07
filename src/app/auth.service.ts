import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseApp = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.firebaseApp);
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) {
    onAuthStateChanged(this.auth, user => {
      this.userSubject.next(user);
      if (user) {
        // Redirect to landing page on successful login
        this.router.navigate(['/landing']);
      } else {
        // Redirect to login page on logout
        this.router.navigate(['/login']);
      }
    });
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  async googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}
