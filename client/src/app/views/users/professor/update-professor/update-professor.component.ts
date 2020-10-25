import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alerts: AlertsService) { }

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
    id: String;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.findById(this.id).subscribe((user) => {
      this.teacher = user;
    });
  }

  update(): void {
    this.userService.update(this.teacher, this.id).subscribe((teacher) => {
      this.alerts.setMessage('Professor alterado com sucesso!','success');
      this.redirect();
    });
  }

  delete(): void {
    this.userService.delete(this.id).subscribe((student) => {
      this.alerts.setMessage('Professor apagado com sucesso!','success');
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