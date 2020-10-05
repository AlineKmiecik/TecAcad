import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Mensalidade } from '../models/Mensalidade';

@Injectable({
  providedIn: 'root'
})
export class MensalidadeService {

  constructor(private http: HttpClient) { }

  list(): Observable<Mensalidade[]> {
    return this.http.get<Mensalidade[]>('http://localhost:1234/mensalidade/listar'); 
  }
}
