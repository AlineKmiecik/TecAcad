import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  list(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>('http://localhost:1234/aluno/listar'); 
  }

  create(Aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>('http://localhost:1234/aluno/cadastrar', Aluno);
  }

  update(Aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>('http://localhost:1234/aluno/alterar', Aluno);
  }

  
  Find(Cpf_Aluno: string): Observable<String> {
    return this.http.get<string>('http://localhost:1234/aluno/buscar/${Cpf_Aluno}'); 
  }
}
