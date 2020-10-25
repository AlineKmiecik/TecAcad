import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from './../../../../models/User';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})

export class ListAlunoComponent implements OnInit {

  students: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService)
    { }

  ngOnInit(): void {
    this.userService.listStudents().subscribe((lista) => {
      this.students = lista;
    });
  }

  navigateToMensalidadeList(): void {
    //this.router.navigate(['mensalidade/list']);
  }

}