import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private user: User;
    
    constructor(
        private router: Router,
        private http: HttpClient
        ) {
            var parsed = JSON.parse(localStorage.getItem('user'));
            if(parsed != null){
                this.user = parsed[0];}
        }

    public get userValue(): User {
        return this.user;
    }

    public get isAluno(): boolean{
        return this.user.type == "Aluno";
    } 

    public get isProfessor(): boolean{
        return this.user.type == "Professor";
    } 

    public get isStaff(): boolean{
        return this.user.type == "Staff";
    } 

    login(username, password): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // Guarda os dados do usuario e o token jwt no local storage pra manter o user logado entre os carregamentos
            localStorage.setItem('user', JSON.stringify(user));
            this.user = user;
            return user;
        }))  ;
    }

    logout() {
        // remove o user do local storage e seta null
        //localStorage.removeItem('user'); //TODO Remover comentario
        //this.user = null; //TODO Remover comentario
        this.router.navigate(['']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update do usuario no local storage
                if (id == this.userValue._id) {
                    // update no local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publica o update do user aos inscritos
                    //this.userSubject.next(user);
                    this.user = user;
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout se o usuario for apagado
                if (id == this.userValue._id) {
                    this.logout();
                }
                return x;
            }));
    }
}