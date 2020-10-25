import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { environment } from '../../../../../environments/environment';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-update-aluno',
  templateUrl: './update-aluno.component.html',
  styleUrls: ['./update-aluno.component.css']
})
export class UpdateAlunoComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alerts: AlertsService) { }

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
    id: String;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.findById(this.id).subscribe((user) => {
      this.student = user;
    });
  }

  update(): void {
    this.userService.update(this.student, this.id).subscribe((student) => {
      this.alerts.setMessage('Aluno alterado com sucesso!','success');
      this.router.navigate(['list/student']);
    });
  }

  delete(): void {
    this.userService.delete(this.id).subscribe((student) => {
      this.alerts.setMessage('Aluno apagado com sucesso!','success');
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