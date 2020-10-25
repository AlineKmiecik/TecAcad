import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from './../../../../models/User';
import { StudentService } from '../../../../services/user.service';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})

export class ListAlunoComponent implements OnInit {

  Students: User[] = [];

  constructor(
    private router: Router,
    private StudentService: StudentService)
    { }

  ngOnInit(): void {
    this.StudentService.listStudents().subscribe((lista) => {
      this.Students = lista; 
    });
  }

  navigateToMensalidadeList(): void {
    //this.router.navigate(['mensalidade/list']);
  }

}