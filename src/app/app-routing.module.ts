import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'nav',loadChildren :() => import('./core/nav/nav.module').then((m) => m.NavModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
