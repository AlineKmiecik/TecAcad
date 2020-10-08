import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Professor } from './../../../models/Professor';
import { ProfessorService } from './../../../services/Professor.service';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit {

  Professores: Professor[] = [];

  constructor(private router: Router, private ProfessorService: ProfessorService) { }

  ngOnInit(): void {
    this.ProfessorService.list().subscribe((lista) => {
      this.Professores = lista; 
    });

  }

}
