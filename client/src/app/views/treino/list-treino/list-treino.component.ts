import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Treino } from './../../../models/Treino';
import { TreinoService } from './../../../services/treino.service';

@Component({
  selector: 'app-list-treino',
  templateUrl: './list-treino.component.html',
  styleUrls: ['./list-treino.component.css']
})
export class ListTreinoComponent implements OnInit {

  Treinos: Treino[] = [];

  constructor(private router: Router, private TreinoService: TreinoService) { }

  ngOnInit(): void {
    this.TreinoService.list().subscribe((lista) => {
      console.log(lista);
      this.Treinos = lista; 
    });
  }

}
