import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss']
})
export class GenerateKeyComponent implements OnInit {

  modeselect: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
