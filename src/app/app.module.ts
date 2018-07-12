import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
