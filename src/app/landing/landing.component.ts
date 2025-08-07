import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-container" *ngIf="user">
      <div class="landing-box">
        <h2>Welcome, {{ user.displayName }}!</h2>
        <p>Your email is: {{ user.email }}</p>
        <button class="logout-btn" (click)="logout()">
          Logout
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
    .landing-box {
      background: #fff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h2 {
      margin-bottom: 10px;
      color: #333;
    }
    p {
      color: #666;
      margin-bottom: 20px;
    }
    .logout-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .logout-btn:hover {
      background-color: #0056b3;
    }
  `]
})
export class LandingComponent implements OnInit, OnDestroy {
  user: User | null = null;
  private userSubscription: Subscription | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}

