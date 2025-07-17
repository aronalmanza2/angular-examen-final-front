import { Component } from '@angular/core';
import { BuscarPipe } from '../../pipes/buscar-pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { productos } from './data/data';

@Component({
  selector: 'app-filtro-producto',
  imports: [CommonModule, FormsModule, BuscarPipe],
  templateUrl: './filtro-producto.html',
})
export class FiltroProducto {
  productos: any[] = productos;

  filtro: string = '';
  precioMin: number | null = null;
  precioMax: number | null = null;
  marcaSeleccionada: string = 'TODAS';

  get marcasUnicas(): string[] {
    return [...new Set(this.productos.map((p) => p.marca))];
  }
}
