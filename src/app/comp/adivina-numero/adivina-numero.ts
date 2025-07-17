import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adivina-numero',
  imports: [CommonModule, FormsModule],
  templateUrl: './adivina-numero.html',
})
export class AdivinaNumero {
  numerosSecretos: number[] = [];
  puntaje: number = 0;

  intento: number | null = null;
  intento1: number | null = null;
  intento2: number | null = null;

  intentoActual: number = 1;
  indiceNumero: number = 0;

  mensaje: string = '';
  juegoTerminado: boolean = false;

  constructor() {
    this.generarNumeros();
  }

  generarNumeros() {
    const num1 = this.generarNumero();
    let num2 = this.generarNumero();
    while (num2 === num1) {
      num2 = this.generarNumero();
    }
    this.numerosSecretos = [num1, num2];
    console.log('Números generados:', this.numerosSecretos);
  }

  generarNumero(): number {
    return Math.floor(Math.random() * 5) + 1;
  }

  adivinar() {
    if (this.juegoTerminado || this.intento === null) return;

    const numeroSecreto = this.numerosSecretos[this.indiceNumero];

    if (this.intentoActual === 1) {
      this.intento1 = this.intento;
    } else {
      this.intento2 = this.intento;
    }

    if (this.intento === numeroSecreto) {
      const puntos = this.intentoActual === 1 ? 100 : 50;
      this.puntaje += puntos;
      this.mensaje = `¡Correcto! Adivinaste el número ${numeroSecreto} y ganaste ${puntos} puntos.`;
      this.pasarAlSiguiente();
    } else {
      if (this.intentoActual === 1) {
        this.intentoActual = 2;
        this.mensaje = 'Incorrecto. Intenta nuevamente.';
      } else {
        this.mensaje = `Fallaste ambos intentos. El número era ${numeroSecreto}.`;
        this.pasarAlSiguiente();
      }
    }

    this.intento = null; // Limpiar input
  }

  pasarAlSiguiente() {
    this.intentoActual = 1;
    this.intento1 = null;
    this.intento2 = null;
    this.indiceNumero++;

    if (this.indiceNumero >= this.numerosSecretos.length) {
      this.juegoTerminado = true;
      this.mensaje += ` Juego terminado. Puntaje total: ${this.puntaje}`;
    }
  }

  reiniciar() {
    this.puntaje = 0;
    this.intento1 = null;
    this.intento2 = null;
    this.intentoActual = 1;
    this.indiceNumero = 0;
    this.mensaje = '';
    this.juegoTerminado = false;
    this.generarNumeros();
  }
}
