import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    NavComponent,
    ProduitComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class NavModule { }
