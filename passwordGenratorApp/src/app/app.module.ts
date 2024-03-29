import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Comp1Component } from './fourcompfolder/comp1/comp1.component';
import { Comp2Component } from './fourcompfolder/comp2/comp2.component';
import { Comp3Component } from './fourcompfolder/comp3/comp3.component';
import { Comp4Component } from './fourcompfolder/comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
