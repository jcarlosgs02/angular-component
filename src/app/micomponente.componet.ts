import { Component } from '@angular/core';

@Component({

  selector: 'mi-componente',
  template: `
  <h1>{{titulo}}</h1>
  <p>Este es mi componente</p>
  `
})
export class Micomponente{
public titulo :string;
constructor(){

  this.titulo="Titulo";
  console.log("componente mi componente cargado");
}

}