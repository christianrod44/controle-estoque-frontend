import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/materiais';

  getMateriais(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl);
  }

  getMaterial(id: number | string): Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/${id}`);
  }

  addMaterial(material: Omit<Material, 'id'>): Observable<Material> {
    return this.http.post<Material>(this.apiUrl, material);
  }

  updateMaterial(id: number | string, material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.apiUrl}/${id}`, material);
  }

  deleteMaterial(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}