import { Routes } from '@angular/router';
import { Inicio } from './comp/navegacion/inicio/inicio';
import { Error } from './comp/navegacion/error/error';
import { Cuestionario } from './comp/cuestionario/cuestionario';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'cuestionario', component: Cuestionario },

  { path: '**', component: Error },
];
