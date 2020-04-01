import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss']
})

export class GenerateKeyComponent implements OnInit {

  sSelectBitType: string = '-1'
  sPrivateKey: string = 'private key'
  sPublicKey: string = 'publick key'
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // Click events
  GenerateKeyClick(){

    if(this.sSelectBitType == '-1'){
      this.DisplaySnackBar("Please select key mode")
      return
    }
   
    // fetch from api
    this.CopyToClipboard("dfverebhrtherfv")
    
  }

  // Private funtions
  DisplaySnackBar(message:string){
    this._snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }

  CopyToClipboard(text: string){
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (text));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
