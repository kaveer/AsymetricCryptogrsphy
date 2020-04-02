import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss']
})

export class GenerateKeyComponent implements OnInit {

  sSelectBitType: string = '-1'
  sPrivateKey: string = ''
  sPublicKey: string = ''
  
  constructor(private _snackBar: MatSnackBar, private _apiService: ApiService) { }

  ngOnInit(): void {
  }

  // Click events
  GenerateKeyClick(){

    if(this.sSelectBitType == '-1'){
      this.DisplaySnackBar("Please select key mode")
      return
    }
   
    // fetch from api
    this._apiService.GenerateKey(Number(this.sSelectBitType)).subscribe(
      (response) => {                           
        console.log('response received')
        console.log(response)
        this.sPrivateKey = response.PrivateKey
        this.sPublicKey = response.PublicKey
        this.DisplaySnackBar("Keys generated")
      },
      (error) => {                              
        console.error('error caught in component')
        console.error(error)
        this.DisplaySnackBar("Fail to generate asymmetric keys")
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
