import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService) { }

  ngOnInit(): void {
  }

  teacher: User ={
    firstname: "",
    lastname: "",
    document: "",
    type: "Professor",
    username: "",
    password: "",
    status: "",
    token: "",
  }

  create(): void {
    this.userService.create(this.teacher).subscribe((teacher) => {
      this.alerts.setMessage('Professor cadastrado com sucesso!','success');
      this.redirect();
    });
  }

  async redirect(){
    await this.delay(2000)
    this.router.navigate(['list/teacher']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
