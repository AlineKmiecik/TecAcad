import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-update-aluno',
  templateUrl: './update-aluno.component.html',
  styleUrls: ['./update-aluno.component.css']
})
export class UpdateAlunoComponent implements OnInit {

  Aluno: Aluno ={
    _id: "",
    nome: "",
    cpf: "",
    status: ""

  }

  constructor(private router: Router, private AlunoService: AlunoService) { }

  ngOnInit(): void {
    this.AlunoService.Find(this.Aluno.cpf).subscribe((Aluno) => {
      this.Aluno = Aluno; 
    });
  }

  Update(): void {
    this.AlunoService.update(this.Aluno).subscribe((Aluno) => {
    });
  }

}
