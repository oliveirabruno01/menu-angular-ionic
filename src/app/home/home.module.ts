import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CategoriaComponentModule } from '../categoria/categoria.module';
import { ProdutoComponentModule } from '../produto/produto.module';
import { PromocionalComponentModule } from '../promocional/promocional.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaComponentModule,
    HomePageRoutingModule,
    ProdutoComponentModule,
    PromocionalComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
