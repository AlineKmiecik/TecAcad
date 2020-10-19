import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class StudentService {

    constructor(
        private router: Router,
        private http: HttpClient
        ){}

    list() {
        return this.http.get<User[]>(`${environment.apiUrl}/usuario/listar/${"Student"}`);
    }

    find(id: string){
        return this.http.get<User>(`${environment.apiUrl}/usuario/listar//${id}`);
      }
}