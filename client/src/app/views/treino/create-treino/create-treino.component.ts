import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Treino } from 'src/app/models/Treino';
import { TreinoService } from 'src/app/services/treino.service';
import { User } from '../../../models/User';
import { Atividade } from '../../../models/Atividade';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-create-treino',
  templateUrl: './create-treino.component.html',
  styleUrls: ['./create-treino.component.css']
})

export class CreateTreinoComponent implements OnInit {

  user: User;
  students: User[] = [];
  student: User;
  activities: Atividade[];
  contactForm: FormGroup;

  constructor(
    private service: TreinoService,
    private accountService: AccountService,
    private userService: UserService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private location: Location,
    private alerts: AlertsService) {
      this.user = this.accountService.userValue;
    }
    
  treino: Treino = {
    date: new Date,
    student: new User,
    teacher: this.accountService.userValue,
    activities: [],
    concluded: false
  }

  activitie: Atividade = this.clearActivitie();

  clearActivitie(): Atividade{
    return {
      name: "",
      description: "",
      concluded: false,
      price: 0
    };
  }

  addActivitie(){
    let activ: Atividade = {
      name: this.activitie.name,
      description: this.activitie.description,
      concluded: false,
      price: Math.floor(Math.random() * 99) + 1 //TODO Implementar o esquema de precificacao da atividade
      }
    this.treino.activities.push(activ);
    this.activities = this.treino.activities;
    this.alerts.setMessage('Atividade adicionada!','success');
    this.activitie = this.clearActivitie();
  }
  

  ngOnInit(): void {
    this.userService.listStudents().subscribe((lista) => {
      this.students = lista;
    });

    this.contactForm = this.formBuilder.group({
      student: [null]
    });
  }

  create(): void {
    this.treino.student = this.contactForm.value.student;
    this.service.create(this.treino).subscribe((Treino) => {
      this.alerts.setMessage('Treino criado com sucesso!','success');
    this.redirect();
    });
  }

  backClicked() {
    this.location.back();
  }

  async redirect(){
    await this.delay(2000)
    location.reload();
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
