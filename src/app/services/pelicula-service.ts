import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPelicula } from '../comp/portal-peliculas/models/IPelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private api = 'http://localhost:5000/peliculas';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<IPelicula[]>(this.api);
  }
  registrar(peli: IPelicula) {
    return this.http.post<IPelicula>(this.api, peli);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
