import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit {

  Aluno: Aluno ={
    Nome: "",
    Cpf: "",
    Status_Matricula: ""

  }

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.Aluno).subscribe((Aluno) => {
    });
  }

}
