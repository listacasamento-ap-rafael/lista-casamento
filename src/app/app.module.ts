import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminConfirmComponent } from './components/admin-confirm/admin-confirm.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./components/home/home.component";
import {EscolherPresenteComponent} from "./components/escolher-presente/escolher-presente.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminConfirmComponent,
    HomeComponent,
    EscolherPresenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
