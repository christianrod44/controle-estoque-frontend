import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Material } from '../../core/models/material';
import { MaterialService } from '../../core/services/material.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../core/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private materialService = inject(MaterialService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  public materiais$!: Observable<Material[]>;
  public displayedColumns: string[] = ['nome', 'quantidade', 'unidadeMedida', 'preco', 'acoes'];

  ngOnInit(): void {
    this.carregarMateriais();
  }

  carregarMateriais(): void {
    this.materiais$ = this.materialService.getMateriais();
  }

  editar(id: number | string): void {
    this.router.navigate(['/home/editar', id]);
  }

  excluir(id: number | string, nome: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { nome: nome }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.materialService.deleteMaterial(id).subscribe(() => {
          this.snackBar.open('Material excluído com sucesso!', 'Fechar', { duration: 3000 });
          this.carregarMateriais();
        });
      }
    });
  }
  
}