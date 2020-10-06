import { Component, OnInit } from '@angular/core';
import { AtividadeService } from 'src/app/services/atividade.service';

import { Atividade } from 'src/app/models/Atividade';

@Component({
  selector: 'app-create-atividade',
  templateUrl: './create-atividade.component.html',
  styleUrls: ['./create-atividade.component.css']
})
export class CreateAtividadeComponent implements OnInit {
  Atividade: Atividade ={
    Nome: "Aula de jump teste",
    Descricao: "aula com cama elastica"

}

  constructor(private service: AtividadeService) { }

  ngOnInit(): void {
  }

  create(): void {
    // console.log(this.cycle.date);
    this.service.create(this.Atividade).subscribe((Atividade) => {
      console.log(Atividade);
    });
  }

}
