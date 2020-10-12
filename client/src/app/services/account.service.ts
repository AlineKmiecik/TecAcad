import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password): Observable<User> {
        console.log("account.service.in")
        console.log(username +"/"+ password)
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // Guarda os dados do usuario e o token jwt no local storage pra manter o user logado entre os carregamentos
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            console.log("account.service.out")
            return user;
        }))  ;
    }

    logout() {
        // remove o user do local storage e seta null
        localStorage.removeItem('user');
        this.userSubject.next(null);
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
                if (id == this.userValue.id) {
                    // update no local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publica o update do user aos inscritos
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout se o usuario for apagado
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}