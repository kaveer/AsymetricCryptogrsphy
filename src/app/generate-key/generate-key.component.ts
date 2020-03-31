import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss']
})
export class GenerateKeyComponent implements OnInit {

  sSelectBitType: string = '-1'
  sPrivateKey: string = 'fgb'
  sPublicKey: string = 'fgbgb'
  
  constructor() { }

  ngOnInit(): void {
  }

  GenerateKeyClick(){
    
  }

  CancelClick(){
    this.sSelectBitType = '-1'
    this.sPrivateKey = ''
    this.sPublicKey = ''
  }

}
