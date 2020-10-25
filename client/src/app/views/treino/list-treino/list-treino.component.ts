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

@Component({
  selector: 'app-list-treino',
  templateUrl: './list-treino.component.html',
  styleUrls: ['./list-treino.component.css']
})
export class ListTreinoComponent implements OnInit {

  treinos: Treino[] = [];
  isAluno: boolean;
  isProfessor: boolean;
  isStaff: boolean;
  totalTrainingPrice: number;

  constructor(
    private router: Router,
    private treinoService: TreinoService,
    private modalService: NgbModal,
    private userService: UserService,
    private accountService: AccountService) {
      this.isAluno = this.accountService.isAluno;
      this.isProfessor = this.accountService.isProfessor;
      this.isStaff= this.accountService.isStaff;
    }

  ngOnInit(): void {
    this.treinoService.list().subscribe((lista) => {
      this.treinos = lista;
    });
  }

  atividades: Atividade[] = [];
  openDetailsModal(detailsModal, atividade) { 
    this.atividades = atividade;
    this.modalService.open(detailsModal, atividade);
  } 
  
  totalPrice: Number;
  openPriceModal(priceModal, id) {
    this.treinoService.listPriceByTrainingId(id).subscribe((price) => {
      console.log("Price: " + price)
      this.totalPrice = price;
    });
    this.modalService.open(priceModal, id);
  } 

}
