import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SocialAuthService } from '@abacritt/angularx-social-login'; // 1. Importar o serviço do Google

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('user'));
  isLoggedIn$ = this.loggedIn.asObservable();

  //Injetar o serviço do Google
  private router = inject(Router);
  private socialAuthService = inject(SocialAuthService);

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
  }

  logout(): void {
    //Chamar o signOut()
    this.socialAuthService.signOut().finally(() => {
      localStorage.removeItem('user');
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    });
  }

  isUserLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }
}