import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerateKeyComponent} from "./generate-key/generate-key.component";
import {CryptographyComponent} from "./cryptography/cryptography.component";


const routes: Routes = [
  {path: '', component : GenerateKeyComponent},
  {path: 'crypt', component : CryptographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
