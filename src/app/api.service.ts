import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sBaseUrl:string = 'http://localhost:64347/'
  sGenerateKeyEndpoint = 'key/generate/'

  constructor(private httpClient: HttpClient) { }

  public GenerateKey(mode: number): Observable<any>{
    return this.httpClient.get(this.sBaseUrl+ this.sGenerateKeyEndpoint+ mode);
  }
}
