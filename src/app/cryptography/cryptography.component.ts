import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cryptography',
  templateUrl: './cryptography.component.html',
  styleUrls: ['./cryptography.component.scss']
})
export class CryptographyComponent implements OnInit {

  sEncryptPublicKey: string = ''
  sEncryptPlainText: string = ''
  sEncryptCiphertext: string = ''

  sDecryptPrivateKey: string = ''
  sDecryptCiphertext: string = ''
  sDecryptPlainText: string = ''

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  EncryptClick(){
    this.DisplaySnackBar("encrypt")
  }

  DecryptClick(){
    this.DisplaySnackBar("decrypt")
  }

  // Private funtions
  DisplaySnackBar(message:string){
    this._snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
}
