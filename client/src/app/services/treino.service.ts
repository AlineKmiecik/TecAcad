import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Treino } from '../models/Treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor(private http: HttpClient) { }

  list(): Observable<Treino[]> {
    return this.http.get<Treino[]>('http://localhost:1234/treino/listar'); 
  }
}
