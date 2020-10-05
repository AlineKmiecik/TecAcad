import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Atividade } from '../models/Atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private http: HttpClient) { }

  list(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>('http://localhost:1234/atividade/listar'); 
  }
}
