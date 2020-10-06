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
    Cpf: ""

  }

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
  }

  create(): void {
    // console.log(this.cycle.date);
    this.service.create(this.Aluno).subscribe((Aluno) => {
      console.log(Aluno);
    });
  }

}
