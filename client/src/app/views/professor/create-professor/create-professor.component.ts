import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/Professor';
import { ProfessorService } from 'src/app/services/Professor.service';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  constructor(private service: ProfessorService) { }

  Professor: Professor ={
      Nome: "",
      Cpf: ""
  
  }


  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.Professor).subscribe((Professor) => {
    });
  }

}
