import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

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

  constructor(private _snackBar: MatSnackBar, private _apiService: ApiService) { }

  ngOnInit(): void {
  }

  EncryptClick(){
    if(this.sEncryptPlainText == ""){
      this.DisplaySnackBar("Invalid plaintext")
    }

    if(this.sEncryptPublicKey == ""){
      this.DisplaySnackBar("Invalid public key")
    }

    this._apiService.Encrypt(this.sEncryptPublicKey, this.sEncryptPlainText).subscribe(
      (response) => {                           
        console.log(response)
        this.DisplaySnackBar("Encryption successfull")
        this.sEncryptCiphertext = response
      },
      (error) => {                              
        console.error(error)
        this.DisplaySnackBar("Fail to Encrypt data")
      }
    )

  }

  DecryptClick(){
    if(this.sDecryptCiphertext == ""){
      this.DisplaySnackBar("Invalid ciphertext")
    }

    if(this.sDecryptPrivateKey == ""){
      this.DisplaySnackBar("Invalid private key")
    }

    this._apiService.Decrypt(this.sDecryptPrivateKey, this.sDecryptCiphertext).subscribe(
      (response) => {                           
        console.log(response)
        this.DisplaySnackBar("Decryption successfull")
        this.sDecryptPlainText = response
      },
      (error) => {                              
        console.error(error)
        this.DisplaySnackBar("Fail to decrypt data")
      }
    )
  }

  // Private funtions
  DisplaySnackBar(message:string){
    this._snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
}
