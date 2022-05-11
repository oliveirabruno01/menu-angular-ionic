import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categoria/:nome',
    loadChildren: () => import('./view-categoria/view-categoria.module').then( m => m.ViewCategoriaPageModule)
  },
  {
    path: 'produto/:nome',
    loadChildren: () => import('./view-produto/view-produto.module').then( m => m.ViewProdutoPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
