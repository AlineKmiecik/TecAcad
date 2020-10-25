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

  create(Treino: Treino): Observable<Treino>{
    return this.http.post<Treino>(`${environment.apiUrl}/cadastro/treino`, Treino);
  }

  listPriceByTrainingId(id: String): Observable<Number>{
    return this.http.get<Number>(`${environment.apiUrl}/lista/treino/price/${id}`);
  }

}
