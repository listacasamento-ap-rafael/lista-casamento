import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { GiftItemComponent } from './components/gift-item/gift-item.component';
import { AdminConfirmComponent } from './components/admin-confirm/admin-confirm.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    GiftListComponent,
    GiftItemComponent,
    AdminConfirmComponent
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
