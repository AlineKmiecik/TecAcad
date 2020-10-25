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

    listStudents() {
        return this.http.get<User[]>(`${environment.apiUrl}/lista/usuario/${"Student"}`);
    }

    findById(id: String){
        console.log("id: " + id)
        console.log("student: " + `${environment.apiUrl}/lista/usuario//${id}`)
        return this.http.get<User>(`${environment.apiUrl}/lista/usuario//${id}`);
      }
}