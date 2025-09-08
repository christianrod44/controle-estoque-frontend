import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { AuthStatusService } from './core/services/auth-status.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  isLoggedIn$: Observable<boolean>;

  constructor(private authStatusService: AuthStatusService) {
    this.isLoggedIn$ = this.authStatusService.isLoggedIn$;
  }
}