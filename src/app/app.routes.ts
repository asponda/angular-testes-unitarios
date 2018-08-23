import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/feature/home/home.module#HomeModule'
  },
  {
    path: 'segunda-tela',
    loadChildren: 'app/feature/segunda-tela/segunda-tela.module#SegundaTelaModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutesModule {}
