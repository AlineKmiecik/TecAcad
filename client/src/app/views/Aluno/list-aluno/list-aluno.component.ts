import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Aluno } from './../../../models/Aluno';
import { AlunoService } from './../../../services/aluno.service';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})
export class ListAlunoComponent implements OnInit {

  Alunos: Aluno[] = [];

  constructor(private router: Router, private AlunoService: AlunoService) { }

  ngOnInit(): void {
    this.AlunoService.list().subscribe((lista) => {
      console.log(lista);
      this.Alunos = lista; 
    });
  }

  navigateToMensalidadeList(): void {
    this.router.navigate(['mensalidade/list']);
  }

}
