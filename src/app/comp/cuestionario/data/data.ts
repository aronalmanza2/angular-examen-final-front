export const preguntas: any[] = [
  {
    id: 1,
    numeracion: 'a',
    titulo:
      'Angular solo acepta codificación en el lenguaje TypeScript.',
    respuestaCorrecta: false,
    justificacion:
      'Falso, Angular actualmente está optimizado para trabajar con TypeScript, pero también permite usar JavaScript, a las finales el archivo TypeScript se compila a JavaScript.',
  },
  {
    id: 2,
    numeracion: 'b',
    titulo:
      'Un pipe permite transformar una propiedad interpolada {{}} mejorando la salida en el Html.',
    respuestaCorrecta: true,
    justificacion:
      'Verdadero, Si permite transformar antes de renderizar en la vista, puede transformar textos, fechas, monedas, etc. Se usa en la interpolación {{ valor | pipe }}.',
  },
  {
    id: 3,
    numeracion: 'c',
    titulo:
      '@for es una nueva forma de directiva del tipo atributo en angular versión 20.',
    respuestaCorrecta: false,
    justificacion:
      'Falso, Porque es una directiva estructural (@for, @if, @switch) y no son invasivas a nivel de tag, a comparación de las directivas de atributos (ngStyle, ngClass).',
  },
  {
    id: 4,
    numeracion: 'd',
    titulo:
      'No es necesario configurar el app.routes.ts para poder acceder al componente un routerLink dentro de un navBar.',
    respuestaCorrecta: false,
    justificacion:
      'Falso, Si es necesario definir la ruta en el archivo app.routes.ts en el (path) y (component/loadComponent), caso contrario el routerLink no sabre que componente cargar.',
  },
  {
    id: 5,
    numeracion: 'e',
    titulo:
      'Para recorrer una lista se utiliza la directiva @if y @switch.',
    respuestaCorrecta: false,
    justificacion:
      'Falso, Las directivas @if y @switch se usan para condiciones y evaluaciones, a diferencia de @for [@for (item of items; track $index) {}] que se usa para recorrer listas.',
  },
  {
    id: 6,
    numeracion: 'f',
    titulo: 'El decorador de cada clase en angular define la función que cumplirá la clase en el proyecto.',
    respuestaCorrecta: true,
    justificacion:
      'Verdadero, Los decoradores definen la función que cumple y su comportamiento como @Component (componente), @Pipe (pipe), @Injetable (servicio).',
  },
  {
    id: 7,
    numeracion: 'g',
    titulo: 'Template Driven se basa en que la lógica se maneje en la clase componente. ',
    respuestaCorrecta: false,
    justificacion:
      'Falso, En Template Driven (formularios simples) La lógica el formulario se maneja desde la vista (html) usando directivas como[(ngModel)], en el componente solo se definen datos, sin poder controlar directamente la lógica de validaciones o estados del formulario a diferencia de Model Driven (formularios complejos) maneja la lógica 100% en el componente.',
  },
  {
    id: 8,
    numeracion: 'h',
    titulo: 'HttpClient debe de importarse en cada componente que lo utilice para poder acceder a una API del tipo json-server como cliente.',
    respuestaCorrecta: true,
    justificacion:
      'Verdadero, En Angular moderno, HttpClient se configura una única vez a nivel aplicación con provideHttpClient() (app.config.ts). Luego, se inyecta en componentes o servicios en el constructor que lo necesite para hacer peticiones HTTP directamente con la API (POST, GET, DELETE, etc.), pero al momento de usar HttpClient, se requiere [import { HttpClient } from @angular/common/http].',
  },
  {
    id: 9,
    numeracion: 'i',
    titulo: 'Model Driven requiere que se configure solo el FormsModule.',
    respuestaCorrecta: false,
    justificacion:
      'Falso, Para Model Driven requiere importar el módulo ReactiveFormsModule y le permite acceder a clases como FormBuilder, FormGroup, Validators, no requiere FormsModule ya que eso se importa en Template Driven.',
  },
  {
    id: 10,
    numeracion: 'j',
    titulo: 'El decorador @Service indica que la clase ts representa un servicio.',
    respuestaCorrecta: false,
    justificacion:
      'Falso, No existe el decorador @Service, para que sea una clase tipo servicio se debe usar el decorador @Injectable, que permite a la clase ser inyectable como servicio.',
  },
];
