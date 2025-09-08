import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../../../core/services/material.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private materialService = inject(MaterialService);
  private snackBar = inject(MatSnackBar);

  form!: FormGroup;
  materialId: number | string | null = null;
  isLoading = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: [null, [Validators.required, Validators.min(0)]],
      unidadeMedida: ['', Validators.required],
      preco: [null, [Validators.required, Validators.min(0)]]
    });

    // Verifica se estamos em modo de edição
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.materialId = id; 
        this.isLoading = true;
        this.materialService.getMaterial(this.materialId).subscribe(material => {
          this.form.patchValue(material);
          this.isLoading = false;
        });
      }
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      return;
    }

    const materialData = this.form.value;
    let request;

    if (this.materialId) {
      // Atualizar
      request = this.materialService.updateMaterial(this.materialId, materialData);
    } else {
      // Criar
      request = this.materialService.addMaterial(materialData);
    }

    request.subscribe(() => {
      this.snackBar.open('Material salvo com sucesso!', 'Fechar', { duration: 3000 });
      this.router.navigate(['/home']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }

  get isEditMode(): boolean {
    return this.materialId !== null;
  }
}