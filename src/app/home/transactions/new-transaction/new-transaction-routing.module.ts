import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTransactionPage } from './new-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: NewTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTransactionPageRoutingModule {}
