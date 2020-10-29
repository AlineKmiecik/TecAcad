import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../../services/account.service';
import { Observable, Subject } from 'rxjs';
import { Treino } from './../../../models/Treino';
import { TreinoService } from './../../../services/treino.service';
import { Atividade } from './../../../models/Atividade';
import { User } from './../../../models/User';
import { UserService } from '../../../services/user.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-list-treino',
  templateUrl: './list-treino.component.html',
  styleUrls: ['./list-treino.component.css']
})
export class ListTreinoComponent implements OnInit {

  treinos: Treino[] = [];
  treino: Treino;
  isAluno: boolean;
  isProfessor: boolean;
  isStaff: boolean;
  totalTrainingPrice: number;

  constructor(
    private router: Router,
    private treinoService: TreinoService,
    private modalService: NgbModal,
    private userService: UserService,
    private accountService: AccountService,
    private alerts: AlertsService) {
      this.isAluno = this.accountService.isAluno;
      this.isProfessor = this.accountService.isProfessor;
      this.isStaff= this.accountService.isStaff;
    }

  ngOnInit(): void {
    this.treinoService.list().subscribe((lista) => {
      this.treinos = lista;
    });
  }

  cadastrarTreino(): void{
    this.router.navigate(['create/treino']);
  }

  atividades: Atividade[] = [];
  openDetailsModal(detailsModal, treino) { 
    this.atividades = treino.activities;
    //this.treino = treino;
    this.modalService.open(detailsModal, treino.activities);
  } 
  
  totalPrice: Number;
  openPriceModal(priceModal, id) {
    this.treinoService.listPriceByTrainingId(id).subscribe((price) => {
      this.totalPrice = price;
    });
    this.modalService.open(priceModal, id);
  }

  updateTraining(treino, id){
    this.treinoService.update(treino, id).subscribe((training => {
      this.alerts.setMessage('Treino atualizado com sucesso!','success');
    }))
  }

  deleteTraining(id): void{
      this.treinoService.delete(id).subscribe((training) => {
      this.alerts.setMessage('Treino apagado com sucesso!','success');
      this.redirect();
    });
  }

  async redirect(){
    await this.delay(2000)
    location.reload();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}