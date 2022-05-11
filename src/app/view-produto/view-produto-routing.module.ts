import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProdutoPage } from './view-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProdutoPageRoutingModule {}
