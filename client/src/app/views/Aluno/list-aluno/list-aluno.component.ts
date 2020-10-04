import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/Aluno';
import { AcademiaService } from './../../../services/academia.service';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})
export class ListAlunoComponent implements OnInit {

  Alunos: Aluno[] = [];

  constructor(private router: Router, private AcademiaService: AcademiaService) { }

  ngOnInit(): void {
      this.AcademiaService.listAluno().subscribe((Aluno) => {
        this.Alunos = Aluno;
        console.log(Aluno);
      });

  }

}
