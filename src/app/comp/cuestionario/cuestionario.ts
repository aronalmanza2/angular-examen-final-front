import { Component } from '@angular/core';
import { preguntas } from './data/data';
import { Pregunta } from './pregunta/pregunta';

@Component({
  selector: 'app-cuestionario',
  imports: [Pregunta],
  templateUrl: './cuestionario.html',
})
export class Cuestionario {
  preguntas: any[] = preguntas;
}
