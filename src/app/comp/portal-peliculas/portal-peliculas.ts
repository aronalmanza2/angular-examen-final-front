import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPelicula } from './models/IPelicula';
import { PeliculaService } from '../../services/pelicula-service';

@Component({
  selector: 'app-portal-peliculas',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portal-peliculas.html',
  styleUrl: './portal-peliculas.css',
})
export class PortalPeliculas {
  mostrarFormulario = false;

  private fb = inject(FormBuilder);

  peliculas: IPelicula[] = [];

  form: FormGroup;

  constructor(
    private peliculaService: PeliculaService,
    private change: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      id: [null],

      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/),
        ],
      ],

      estreno: [
        null,
        [
          Validators.required,
          Validators.min(1900),
          Validators.max(new Date().getFullYear() + 1),
        ],
      ],

      genero: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/),
        ],
      ],

      duracion: [
        null,
        [Validators.required, Validators.min(30), Validators.max(300)],
      ],

      calificacion: [
        null,
        [
          Validators.required,
          Validators.min(0.1),
          Validators.max(10),
          Validators.pattern(/^\d+(\.\d{1})?$/),
        ],
      ],
    });

    this.listar();
  }

  guardar() {
    if (!this.form.valid) return;
    const pelicula = this.form.value;
    this.peliculaService.registrar(pelicula).subscribe(() => {
      this.limpiar();
      this.listar();
    });
  }

  limpiar() {
    this.form.reset();
  }

  listar() {
    this.peliculaService.listar().subscribe((data) => {
      this.peliculas = data;
      this.change.detectChanges();
    });
  }

  eliminar(id: number) {
    this.peliculaService.eliminar(id).subscribe(() => {
      this.listar();
    });
  }
}
