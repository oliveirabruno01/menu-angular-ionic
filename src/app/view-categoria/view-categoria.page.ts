import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto, ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-view-categoria',
  templateUrl: './view-categoria.page.html',
  styleUrls: ['./view-categoria.page.scss'],
})
export class ViewCategoriaPage implements OnInit {
  public produtos: Produto[];
  public categoria: string;

  constructor(
    private data_produtos: ProdutoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.produtos = this.data_produtos.getCategoriaProdutos(nome);
    this.categoria = nome;
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
