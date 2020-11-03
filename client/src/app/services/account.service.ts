import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { error } from '@angular/compiler/src/util';

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
                this.user = parsed;
            }
        }

    public get userValue(): User {
        return this.user;
    }

    public get isLogged(): boolean {
        return this.user != null;
    }

    public get isAluno(): boolean{
        return this.user == null ? false : this.user.type == "Aluno";
    } 

    public get isProfessor(): boolean{
        return this.user == null ? false : this.user.type == "Professor";
    } 

    public get isStaff(): boolean{
        return this.user == null ? false : this.user.type == "Staff";
    } 

    login(username, password): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            if(user.status == "Ativo"){
                localStorage.setItem('user', JSON.stringify(user));
                this.user = user;
                location.reload();
                return user;
            } else {
                return error("Usuário inativo.");
            }
        }));
    }

    logout() {
        localStorage.removeItem('user');
        this.user = null;
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