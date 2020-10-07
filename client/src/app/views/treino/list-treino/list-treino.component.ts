import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Treino } from './../../../models/Treino';
import { Atividade } from './../../../models/Atividade';
import { TreinoService } from './../../../services/treino.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-treino',
  templateUrl: './list-treino.component.html',
  styleUrls: ['./list-treino.component.css']
})
export class ListTreinoComponent implements OnInit {

  Treinos: Treino[] = [];

  constructor(private router: Router, private TreinoService: TreinoService,  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.TreinoService.list().subscribe((lista) => {
      this.Treinos = lista; 
    });
  }

  Atividades: Atividade[] = [];
  
  open(content, Atividade) { 
    this.Atividades = Atividade;
    this.modalService.open(content, Atividade);
  } 

}
