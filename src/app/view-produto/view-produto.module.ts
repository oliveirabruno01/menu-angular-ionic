import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewProdutoPage } from './view-produto.page';

import { IonicModule } from '@ionic/angular';

import { ViewProdutoPageRoutingModule } from './view-produto-routing.module';
import { ProdutoComponentModule } from '../produto/produto.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProdutoPageRoutingModule,
    ProdutoComponentModule
  ],
  declarations: [ViewProdutoPage]
})
export class ViewProdutoPageModule {}
