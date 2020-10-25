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
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.loading = false;
            }
        });
}

}
//user	[{"_id":"5f8c4854bf3f4b0416f5f5e0","firstname":"Aluno","lastname":"Teste","document":"A1","type":"Aluno","username":"a.a","password":"aa","status":"Ativo","token":"","createdAt":"2020-10-18T13:51:16.485Z","__v":0}]
//user	[{"_id":"5f949ebe02c57027248c4c7d","firstname":"Staff","lastname":"Teste","document":"S1","type":"Staff","username":"s.s","password":"ss","status":"Ativo","token":"","createdAt":"2020-10-24T21:38:06.447Z","__v":0}]