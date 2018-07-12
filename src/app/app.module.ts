import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';
import { TootipBasicComponent } from './tootip-basic/tootip-basic.component';
import { PaginationBasicComponent } from './pagination-basic/pagination-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBasicComponent,
    TootipBasicComponent,
    PaginationBasicComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
