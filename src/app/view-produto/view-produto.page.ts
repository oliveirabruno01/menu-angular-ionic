import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Produto } from '../services/data.service';

@Component({
  selector: 'app-view-produto',
  templateUrl: './view-produto.page.html',
  styleUrls: ['./view-produto.page.scss'],
})
export class ViewProdutoPage implements OnInit {
  public produto: Produto;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.produto = this.data.getProduto(nome);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
