import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertsService } from 'angular-alert-module';

import { AccountService} from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alerts: AlertsService
) { }

ngOnInit() {
  this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
}

// getter para acesso facil aos campos do form
get f() { return this.form.controls; }

onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
        return;
    }
    
    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.loading = false;
                this.router.navigateByUrl('');
            },
            error: error => {
                this.alerts.setMessage("Usuário não encontrado. Retente.", 'error');
                //this.alerts.setMessage(error, 'error'); TODO A mensagem do erro já chega nesse parametro. Coletar ela para aparecer na mensagem em tela
                this.loading = false;
            }
        });
    }
}