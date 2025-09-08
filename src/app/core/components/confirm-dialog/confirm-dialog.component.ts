import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>Confirmar Exclusão</h1>
    <div mat-dialog-content>
      <p>Você tem certeza que deseja excluir o item "{{ data.nome }}"?</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onNoClick()">Não</button>
      <button mat-raised-button color="warn" [mat-dialog-close]="true" cdkFocusInitial>Sim, Excluir</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nome: string },
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}