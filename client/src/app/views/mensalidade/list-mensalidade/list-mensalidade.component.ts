import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Mensalidade } from './../../../models/Mensalidade';
import { MensalidadeService } from './../../../services/mensalidade.service';
import { AccountService } from '../../../services/account.service';
import { User } from './../../../models/User';

@Component({
  selector: 'app-list-mensalidade',
  templateUrl: './list-mensalidade.component.html',
  styleUrls: ['./list-mensalidade.component.css']
})
export class ListMensalidadeComponent implements OnInit {

  isStaff: boolean;
  isStudent: boolean;
  loggedUser: User;
  mensalidades: Mensalidade[] = [];

  constructor(
    private accountService: AccountService,
    private mensalidadeService: MensalidadeService,
    private modalService: NgbModal,
    private alerts: AlertsService) {
    this.isStaff = this.accountService.isStaff;
    this.isStudent = this.accountService.isAluno;
  }

  ngOnInit(): void {
    this.loggedUser = this.accountService.userValue;
    
    if(this.isStaff){
      this.mensalidadeService.list().subscribe((lista) => {
        this.mensalidades = lista; 
      });
    } else {
        this.mensalidadeService.listByUserId(this.loggedUser._id).subscribe((lista) => {
        this.mensalidades = lista;
        });
    }
  }
  
  billingsGenerate(): void{
    this.mensalidadeService.generate().subscribe((lista) => {
      this.mensalidades = lista;
    });
    this.alerts.setMessage('Mensalidades geradas com sucesso!','success');
    this.redirect();
  }
  
  payBill(bill): void{
    let datePaid = new Date();
    bill.datePaid = datePaid;
    this.mensalidadeService.update(bill).subscribe((training => {
      this.alerts.setMessage('Mensalidade paga com sucesso!','success');
      this.modalService.dismissAll();
    }))
  }

  async redirect(){
    await this.delay(2000)
    location.reload();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
