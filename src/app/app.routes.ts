import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'novo',
        loadComponent: () => import('./features/materials/material-form/material-form.component').then(m => m.MaterialFormComponent)
      },
      {
        path: 'editar/:id',
        loadComponent: () => import('./features/materials/material-form/material-form.component').then(m => m.MaterialFormComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];