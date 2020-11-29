import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreRootModule, StoreModule } from '@ngrx/store';
import {reducer} from './reducers/user.reducer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({user: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
