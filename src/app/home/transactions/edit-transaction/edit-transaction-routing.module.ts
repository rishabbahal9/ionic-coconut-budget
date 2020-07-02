import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTransactionPage } from './edit-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: EditTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTransactionPageRoutingModule {}
