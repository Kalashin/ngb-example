import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBasicComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
