import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import { Treino } from '../models/Treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor( private http: HttpClient ) { }

  list(): Observable<Treino[]> {
    return this.http.get<Treino[]>(`${environment.apiUrl}/lista/treino`);
  }
  
  listByIdAndType(id: String, type: String): Observable<Treino[]>{
    return this.http.get<Treino[]>(`${environment.apiUrl}/lista/treino/${id}/${type}`);
  }

  create(treino: Treino): Observable<Treino>{
    return this.http.post<Treino>(`${environment.apiUrl}/cadastro/treino`, treino);
  }

  delete(id: String): Observable<Treino>{
    return this.http.delete<Treino>(`${environment.apiUrl}/cadastro/treino/apagar/${id}`);
  }

  update(treino: Treino): Observable<Treino>{
    return this.http.post<Treino>(`${environment.apiUrl}/cadastro/treino/update`, treino);
  }

  listPriceByTrainingId(id: String): Observable<Number>{
    return this.http.get<Number>(`${environment.apiUrl}/lista/treino/price//${id}`);
  }

}
