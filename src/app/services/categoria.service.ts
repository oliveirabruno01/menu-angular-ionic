import { Injectable } from '@angular/core';

/** Diretório das imagens dos produtos.*/
const images_path = './assets/images/itens/';


/** Interface do tipo CategoriaObject, composto pelo nome e pelo caminho da thumbnail. 
 * @param {string} nome Nome da `Categoria`.
 * @param {string} thumbnail_src Caminho da thumbnail.
*/
export interface CategoriaObject {
  nome: string;
  thumbnail_src: string;
}

@Injectable({
  providedIn: 'root'
})

/** Classe CategoriaService, responsável por manter e prover os dados das categorias e produtos.
*/
export class CategoriaService {
  /** Dados das CategoriaObject */
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

  /** Create a CategoriaService. */
  constructor() { }

  /** Função getCategoriasList. 
   * @returns Retorna `this.categorias`.
  */
  public getCategoriasList(): CategoriaObject[] {
    return this.categorias;
  }

  /** Função getCategoriaByNome.
   * @param {string} nome Nome da categoria.
  * @return Retorna o objeto `Categoria` de nome `nome` .*/ 
  public getCategoriaByNome(nome: string): CategoriaObject {
    /** Retorne `this.categorias[nome]` apenas se o resultado não for `undefined`. */
    return this.categorias[nome]!;
  }
}
