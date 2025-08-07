import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-container">
      <div class="login-box">
        <h2>Welcome! Please sign in.</h2>
        <button class="google-btn" (click)="googleLogin()">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.7 9.5 24 9.5z"></path>
            <path fill="#4285F4" d="M46.7 24.5c0-.98-.07-1.87-.2-2.75H24v5.33h12.16c-.52 2.76-2.13 5.17-4.63 6.81l7.98 6.19c4.63-4.32 7.37-10.49 7.37-18.08z"></path>
            <path fill="#FBBC05" d="M10.53 28.5c-.28-.79-.44-1.63-.44-2.5s.16-1.71.44-2.5l-7.98-6.19C.97 19.85 0 21.8 0 24s.97 4.15 2.55 5.86l7.98-6.19z"></path>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.98-6.19c-2.19 1.54-4.99 2.45-7.91 2.45-5.26 0-9.67-3.35-11.23-7.94l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f0f2f5;
      font-family: Arial, sans-serif;
    }
    .login-box {
      background: #fff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h2 {
      margin-bottom: 20px;
      color: #333;
    }
    .google-btn {
      display: inline-flex;
      align-items: center;
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #fff;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
    }
    .google-btn:hover {
      background-color: #f0f0f0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .google-btn svg {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  `]
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  googleLogin() {
    this.authService.googleLogin();
  }
}


