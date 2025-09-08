import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AuthStatusService } from '../../core/services/auth-status.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    GoogleSigninButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private authService = inject(SocialAuthService);
  private authStatusService = inject(AuthStatusService);

  ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => {
      if (user) {
        this.authStatusService.login(user);
      }
    });
  }
}