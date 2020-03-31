import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateKeyComponent } from './generate-key/generate-key.component';
import { CryptographyComponent } from './cryptography/cryptography.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateKeyComponent,
    CryptographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
