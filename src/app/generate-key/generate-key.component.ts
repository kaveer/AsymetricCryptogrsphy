import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss']
})
export class GenerateKeyComponent implements OnInit {

  sSelectBitType: string = '-1'
  sPrivateKey: string = ''
  sPublicKey: string = ''
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  GenerateKeyClick(){
    this._snackBar.open("message", "Ok", {
      duration: 2000,
    });
  }
}
