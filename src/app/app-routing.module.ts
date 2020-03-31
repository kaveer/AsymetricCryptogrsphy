import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerateKeyComponent} from "./generate-key/generate-key.component";
import {CryptographyComponent} from "./cryptography/cryptography.component";
import {AboutUsComponent} from "./about-us/about-us.component"


const routes: Routes = [
  {path: '', component : GenerateKeyComponent},
  {path: 'crypt', component : CryptographyComponent},
  {path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
