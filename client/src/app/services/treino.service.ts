import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { Treino } from '../models/Treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor(private http: HttpClient) { }

  list(): Observable<Treino[]> {
    return this.http.get<Treino[]>(`${environment.apiUrl}/listar/treino`);
  }

  create(Treino: Treino): Observable<Treino>{
    return this.http.post<Treino>('http://localhost:1234/treino/cadastrar', Treino);
  }

}
