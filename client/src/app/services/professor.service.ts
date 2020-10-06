import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Professor } from '../models/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  list(): Observable<Professor[]> {
    return this.http.get<Professor[]>('http://localhost:1234/professor/listar');
  }

  create(Professor: Professor): Observable<Professor>{
    return this.http.post<Professor>('http://localhost:1234/professor/cadastrar', Professor);
  }
} 
