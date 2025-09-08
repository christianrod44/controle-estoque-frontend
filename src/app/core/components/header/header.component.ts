import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthStatusService } from '../../services/auth-status.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, MatToolbarModule, MatIconModule, MatButtonModule ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);
  private authStatusService = inject(AuthStatusService);

  novoMaterial(): void {
    this.router.navigate(['/home/novo']);
  }

  logout(): void {
    this.authStatusService.logout();
  }
}