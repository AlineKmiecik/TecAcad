import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

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
    private accountService: AccountService
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
                // pega a URL de retorno ou seta a Home
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/treino/create';
                console.log("ReturnURL: " + returnUrl)
                console.log("RetornoStorage: " + localStorage.getItem('user'))
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.loading = false;
            }
        });
}

}