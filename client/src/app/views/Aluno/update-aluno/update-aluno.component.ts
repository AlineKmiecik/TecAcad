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
    Nome: "",
    Cpf: "",
    Status_Matricula: ""

  }

  constructor(private router: Router, private AlunoService: AlunoService) { }

  ngOnInit(): void {
    this.AlunoService.Find(this.Aluno.Cpf).subscribe((Aluno) => {
      console.log(Aluno);
      this.Aluno = Aluno; 
    });
  }

  Update(): void {
    // console.log(this.cycle.date);
    this.AlunoService.update(this.Aluno).subscribe((Aluno) => {
      console.log(Aluno);
    });
  }

}
