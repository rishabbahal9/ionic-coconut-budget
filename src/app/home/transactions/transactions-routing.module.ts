import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsPage } from './transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPage
  },
  {
    path: 'new-transaction',
    loadChildren: () => import('./new-transaction/new-transaction.module').then( m => m.NewTransactionPageModule)
  },
  {
    path: 'edit-transaction/:transactionId',
    loadChildren: () => import('./edit-transaction/edit-transaction.module').then( m => m.EditTransactionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsPageRoutingModule {}
