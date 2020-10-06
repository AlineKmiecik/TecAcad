import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  //acesso a rotas do aluno
  navigateToListAluno(): void {
    this.router.navigate(['aluno/list']);
  }
  navigateToCreateAluno(): void {
    this.router.navigate(['aluno/create']);
  }

  //acesso a rotas de atividade
  navigateToListAtividade(): void {
    this.router.navigate(['atividade/list']);
  }
  navigateToCreateAtividade(): void {
    this.router.navigate(['atividade/create']);
  }

  //acesso a rotas de mensalidade
  navigateToListMensalidade(): void {
    this.router.navigate(['mensalidade/list']);
  }

  //acesso a rotas de professor
  navigateToListProfessor(): void {
    this.router.navigate(['professor/list']);
  }
  navigateToCreateProfessor(): void {
    this.router.navigate(['professor/create']);
  }

  //acesso a rotas de treino

}
