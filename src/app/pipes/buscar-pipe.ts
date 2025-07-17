import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(
    productos: any[],
    texto: string,
    precioMin: number | null,
    precioMax: number | null,
    marca: string
  ): any[] {
    if (!productos) return [];

    return productos.filter((producto) => {
      const coincideTexto =
        !texto ||
        producto.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        producto.marca.toLowerCase().includes(texto.toLowerCase());

      const coincidePrecioMin = !precioMin || producto.precio >= precioMin;
      const coincidePrecioMax = !precioMax || producto.precio <= precioMax;
      const coincideMarca = marca === 'TODAS' || producto.marca === marca;

      return (
        coincideTexto && coincidePrecioMin && coincidePrecioMax && coincideMarca
      );
    });
  }
}
