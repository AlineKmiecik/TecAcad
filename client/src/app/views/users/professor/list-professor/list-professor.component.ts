import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from './../../../../models/User';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit {

  teachers: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService)
    { }

  ngOnInit(): void {
    this.userService.listTeachers().subscribe((lista) => {
      this.teachers = lista;
    });
  }

}