import { Component } from '@angular/core';
import { CategoriaService, CategoriaObject } from '../services/categoria.service';
import { Produto, ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public itemPromocional: Produto;
  constructor(private data_categorias: CategoriaService, private data_produtos: ProdutoService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getCategoriasList(): CategoriaObject[] {
    return this.data_categorias.getCategoriasList();
  }

  getProdutoPromocional(): Produto {
    console.log(this.data_produtos.getProduto("Promocional"));
    return this.data_produtos.getProduto("Promocional");
  }
}
