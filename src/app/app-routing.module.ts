import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { AdminConfirmComponent } from './components/admin-confirm/admin-confirm.component';

const routes: Routes = [
  { path: 'gifts', component: GiftListComponent },
  { path: 'admin', component: AdminConfirmComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
