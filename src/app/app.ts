import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './comp/navegacion/navegacion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navegacion],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
