import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { Treino } from '../models/Treino';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor(private http: HttpClient) { }

  list(): Observable<Treino[]> {
    return this.http.get<Treino[]>(`${environment.apiUrl}/lista/treino`);
  }
  
  listByIdAndType(id: String, type: String): Observable<Treino[]>{
    return this.http.get<Treino[]>(`${environment.apiUrl}/lista/treino/${id}/${type}`);
  }

  create(Treino: Treino): Observable<Treino>{
    return this.http.post<Treino>(`${environment.apiUrl}/cadastro/treino`, Treino);
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
