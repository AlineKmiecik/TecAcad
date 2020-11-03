import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import { Mensalidade } from '../models/Mensalidade';

@Injectable({
  providedIn: 'root'
})
export class MensalidadeService {

  constructor( private http: HttpClient ) { }

  list(): Observable<Mensalidade[]> {
    return this.http.get<Mensalidade[]>(`${environment.apiUrl}/lista/mensalidade`);
  }

  listByUserId(id: String): Observable<Mensalidade[]> {
    return this.http.get<Mensalidade[]>(`${environment.apiUrl}/lista/mensalidade/${id}`);
  }

  generate(): Observable<Mensalidade[]> {
    return this.http.get<Mensalidade[]>(`${environment.apiUrl}/cadastro/mensalidade/generate`);
  }

  update(bill: Mensalidade): Observable<Mensalidade>{
    return this.http.post<Mensalidade>(`${environment.apiUrl}/cadastro/mensalidade/update`, bill);
  }
}
