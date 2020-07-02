import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'status',
        loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
