import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Treino } from 'src/app/models/Treino';
import { TreinoService } from 'src/app/services/treino.service';
import { User } from '../../../models/User';
import { Atividade } from '../../../models/Atividade';
import { AccountService } from '../../../services/account.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-create-treino',
  templateUrl: './create-treino.component.html',
  styleUrls: ['./create-treino.component.css']
})

export class CreateTreinoComponent implements OnInit {

  user: User;
  students: Observable<User[]>;
  student: User;
  //teacher: User;
  //activities: Atividade[];

  constructor(
    private service: TreinoService,
    private accountService: AccountService,
    private studentService: StudentService,
    private modalService: NgbModal) {
      this.user = this.accountService.userValue;
      this.students = this.studentService.list();
  }

  Treino: Treino = {
    date: new Date(),
    student: new User,
    teacher: new User,
    activities: [new Atividade],
    concluded: false
  }

  ngOnInit(): void {
  }


  create(): void {
    this.service.create(this.Treino).subscribe((Treino) => {
    });
  }

  open(studentsList) {
    this.modalService.open(studentsList);
  }

  setStudent(user){
    this.student = user;
  }

}
