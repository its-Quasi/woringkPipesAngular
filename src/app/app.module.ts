import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { registerLocaleData } from "@angular/common";
import localCO from "@angular/common/locales/es-CO";
import localCA from "@angular/common/locales/fr-CA";
registerLocaleData(localCO)
registerLocaleData(localCA)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
