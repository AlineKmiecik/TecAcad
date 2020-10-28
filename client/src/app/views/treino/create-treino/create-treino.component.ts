import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Treino } from 'src/app/models/Treino';
import { TreinoService } from 'src/app/services/treino.service';
import { User } from '../../../models/User';
import { Atividade } from '../../../models/Atividade';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.service';

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
    private userService: UserService,
    private modalService: NgbModal) {
      this.user = this.accountService.userValue;
      this.students = this.userService.listStudents();
  }

  treino: Treino = {
    date: new Date,
    student: new User,
    teacher: this.accountService.userValue,
    activities: [new Atividade],
    concluded: false
  }

  activities: Atividade[];
  activitie: Atividade = {
    name: '',
    description: '',
    concluded: false,
    price: 99
    }

  addActivitie(){
    let activ: Atividade = {
      name: this.activitie.name,
      description: this.activitie.description,
      concluded: false,
      price: 99
      }
    this.treino.activities.push(activ);
  }

  ngOnInit(): void {
  }


  create(): void {
    this.service.create(this.treino).subscribe((Treino) => {
    });
  }

  open(studentsList) {
    this.modalService.open(studentsList);
  }

  setStudent(user){
    this.student = user;
  }

}
