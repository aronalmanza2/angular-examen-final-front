import { Routes } from '@angular/router';
import { Inicio } from './comp/navegacion/inicio/inicio';
import { Error } from './comp/navegacion/error/error';
import { Cuestionario } from './comp/cuestionario/cuestionario';
import { AdivinaNumero } from './comp/adivina-numero/adivina-numero';
import { FiltroProducto } from './comp/filtro-producto/filtro-producto';
import { PortalPeliculas } from './comp/portal-peliculas/portal-peliculas';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'cuestionario', component: Cuestionario },
  { path: 'filtro-producto', component: FiltroProducto },
  { path: 'adivina-numero', component: AdivinaNumero },
  { path: 'portal-peliculas', component: PortalPeliculas },

  { path: '**', component: Error },
];
