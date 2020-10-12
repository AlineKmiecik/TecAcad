import { Component, OnInit } from '@angular/core';
import { Treino } from 'src/app/models/Treino';
import { TreinoService } from 'src/app/services/treino.service';
import { User } from '../../../models/User';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-create-treino',
  templateUrl: './create-treino.component.html',
  styleUrls: ['./create-treino.component.css']
})
export class CreateTreinoComponent implements OnInit {

  user: User;

  constructor(private service: TreinoService, private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }

  Treino: Treino ={
    Data_Treino: new Date(),
    Cpf_Aluno: "",
    Cpf_Professor: "",

    Atividade: [
        {
            "Nome": "teste",  
            "Descricao": "",
            "Status_Atividade": "",
            "Valor_Atividade" : 0
        },
    ]
  }

  ngOnInit(): void {
  }


  create(): void {
    this.service.create(this.Treino).subscribe((Treino) => {
    });
  }

}
