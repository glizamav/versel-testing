import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
   
    const resultadoFiltro = [];
    for (const lista of value) {
      if (lista.descripcion.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoFiltro.push(lista)

      }
      else if ((lista.especie).toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoFiltro.push(lista)

      }
      else if (lista.precio.toString().indexOf(arg.toLowerCase()) > -1) {
        resultadoFiltro.push(lista)
      };

    };

    return resultadoFiltro;
  }
}