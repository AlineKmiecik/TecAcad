import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // retorna pra Home se já estiver logado
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}