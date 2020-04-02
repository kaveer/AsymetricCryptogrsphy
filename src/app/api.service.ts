import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sBaseUrl:string = 'http://localhost:64347/'
  sGenerateKeyEndpoint: string = 'key/generate/'
  sEncryptEndpoint : string =  'key/encrypt/'
  sDecryptEndpoint : string =  'key/decrypt/'

  constructor(private httpClient: HttpClient) { }

  public GenerateKey(mode: number): Observable<any>{
    return this.httpClient.get(this.sBaseUrl+ this.sGenerateKeyEndpoint+ mode);
  }

  public Encrypt(sPublicKey: string, sPlaintext:string): Observable<any>{
    return this.httpClient.post(this.sBaseUrl+ this.sEncryptEndpoint, {
      'PublicKey': sPublicKey,
      'Plaintext': sPlaintext
    });
  }

  public Decrypt(sPrivateKey: string, sCiphertext:string): Observable<any>{
    return this.httpClient.post(this.sBaseUrl+ this.sDecryptEndpoint, {
      'PrivateKey': sPrivateKey,
      'Chipertext': sCiphertext
    });
  }


}
