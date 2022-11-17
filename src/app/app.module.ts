import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DasboardComponent]
})
export class AppModule { }
