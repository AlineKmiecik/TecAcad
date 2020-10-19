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
    name: "",
    description: "",
    concluded: false,
    price: 0

}

  constructor(private service: AtividadeService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.Atividade).subscribe((Atividade) => {
    });
  }

}
