import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfirmComponent } from './components/admin-confirm/admin-confirm.component';
import {HomeComponent} from "./components/home/home.component";
import {EscolherPresenteComponent} from "./components/escolher-presente/escolher-presente.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'escolher-presente', component: EscolherPresenteComponent },
  { path: 'admin', component: AdminConfirmComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
