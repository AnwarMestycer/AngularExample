import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path:'', component:NavComponent,
    children : [
      {
        path:'produit', component:ProduitComponent
      },
      {
        path:'panier',component:PanierComponent
      }
    ]
    
  }
]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
