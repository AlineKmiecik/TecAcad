import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Atividade } from './../../../models/Atividade';
import { AtividadeService } from './../../../services/atividade.service';

@Component({
  selector: 'app-list-atividade',
  templateUrl: './list-atividade.component.html',
  styleUrls: ['./list-atividade.component.css']
})
export class ListAtividadeComponent implements OnInit {

  Atividades: Atividade[] = [];

  constructor(private router: Router, private AtividadeService: AtividadeService) { }

  ngOnInit(): void { 
    this.AtividadeService.list().subscribe((lista) => {
      this.Atividades = lista; 
    });

  }

}
