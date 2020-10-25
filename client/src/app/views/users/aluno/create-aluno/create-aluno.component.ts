import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { environment } from '../../../../../environments/environment';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService) { }

  ngOnInit(): void {
  }

  student: User ={
    firstname: "",
    lastname: "",
    document: "",
    type: "Aluno",
    username: "",
    password: "",
    status: "",
    token: "",
  }

  create(): void {
    this.userService.create(this.student).subscribe((student) => {
      this.alerts.setMessage('Aluno cadastrado com sucesso!','success');
      this.redirect();
    });
  }

  async redirect(){
    await this.delay(2000)
    this.router.navigate(['list/student']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
