import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string = '', columna: string = 'title'): any[] {

    if(texto === ''){
      return value;
    }

    if (!value) {
      return value;
    }

    texto = texto.toLocaleLowerCase();

    return value.filter(item => item[columna].toLocaleLowerCase().includes(texto));
  }

}
