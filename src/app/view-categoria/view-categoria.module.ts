import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewCategoriaPage } from './view-categoria.page';

import { IonicModule } from '@ionic/angular';

import { ViewCategoriaPageRoutingModule } from './view-categoria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCategoriaPageRoutingModule
  ],
  declarations: [ViewCategoriaPage]
})
export class ViewCategoriaPageModule {}
