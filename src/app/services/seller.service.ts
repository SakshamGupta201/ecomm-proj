import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SingUp } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient: HttpClient) { }

  userSignUp(data: SingUp) {
    const url = "http://localhost:3000/seller"
    return this.httpClient.post(url, data)
  }
}
