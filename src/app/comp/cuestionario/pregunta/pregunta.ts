import { Component, Input } from '@angular/core';

interface IPregunta {
  id: number;
  numeracion: string;
  titulo: string;
  respuestaCorrecta: boolean;
  justificacion: string;
}

@Component({
  selector: 'app-pregunta',
  imports: [],
  templateUrl: './pregunta.html',
})
export class Pregunta {
  @Input({ required: true }) pregunta!: IPregunta;
  @Input() idAcordion: string = '';
}
