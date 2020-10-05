import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Mensalidade } from './../../../models/Mensalidade';
import { MensalidadeService } from './../../../services/mensalidade.service';

@Component({
  selector: 'app-list-mensalidade',
  templateUrl: './list-mensalidade.component.html',
  styleUrls: ['./list-mensalidade.component.css']
})
export class ListMensalidadeComponent implements OnInit {

  Mensalidades: Mensalidade[] = [];

  constructor(private router: Router, private MensalidadeService: MensalidadeService) { }

  ngOnInit(): void {
    this.MensalidadeService.list().subscribe((lista) => {
      console.log(lista);
      this.Mensalidades = lista; 
    });
  }

}
