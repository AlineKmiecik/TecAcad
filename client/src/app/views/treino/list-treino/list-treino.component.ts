import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { Treino } from './../../../models/Treino';
import { Atividade } from './../../../models/Atividade';
import { User } from './../../../models/User';
import { TreinoService } from './../../../services/treino.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list-treino',
  templateUrl: './list-treino.component.html',
  styleUrls: ['./list-treino.component.css']
})
export class ListTreinoComponent implements OnInit {

  treinos: Treino[] = [];

  constructor(
    private router: Router,
    private treinoService: TreinoService,
    private modalService: NgbModal,
    private userService: UserService) { }
    

  ngOnInit(): void {
    this.treinoService.list().subscribe((lista) => {
      this.treinos = lista;
    });
  }

  Atividades: Atividade[] = [];
  open(content, Atividade) { 
    this.Atividades = Atividade;
    this.modalService.open(content, Atividade);
  } 

}
