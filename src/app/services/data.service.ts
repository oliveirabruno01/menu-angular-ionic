import { Injectable } from '@angular/core';

export interface CategoriaObject {
  nome: string;
  thumbnail_src: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public categorias: CategoriaObject[] = [
    {
      nome: 'lanches',
      thumbnail_src: './assets/images/thumbnails/hamburguer.png',
    },
  
    {
      nome: 'entradas',
      thumbnail_src: './assets/images/thumbnails/prato-entrada.png',
    },
  
    {
      nome: 'refeições',
      thumbnail_src: './assets/images/thumbnails/refeicao.png',
    },
  
    {
      nome: 'sobremesas',
      thumbnail_src: './assets/images/thumbnails/sobremesa.png',
    },
  
    {
      nome: 'bebidas',
      thumbnail_src: './assets/images/thumbnails/bebida.png',
    }
  ];

  constructor() { }

  public getCategoriasList(): CategoriaObject[] {
    return this.categorias;
  }

  public getCategoriaByNome(nome: string): CategoriaObject {
    return this.categorias[nome]!;
  }
}
