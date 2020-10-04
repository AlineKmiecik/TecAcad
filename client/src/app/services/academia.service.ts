import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AcademiaService {

  constructor(private http: HttpClient) {

   }

   listAluno(): Observable<Aluno[]>{
     return this.http.get<Aluno[]>('http://localhost:1234/aluno/listar');
   }
}
