import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders = (): Observable<any> => {
    return this.http.get<any>('http://localhost:3000/orders', { headers: {} });
  };
}
