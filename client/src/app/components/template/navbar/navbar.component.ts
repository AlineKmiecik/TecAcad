import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

import { AccountService } from '../../../services/account.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  isAluno: boolean;
  isProfessor: boolean;
  isStaff: boolean;
  isLogged: boolean;

  constructor(
    private router: Router,
    private location: Location,
    private accountService: AccountService) {
      this.user = this.accountService.userValue;
      this.isAluno = this.accountService.isAluno;
      this.isProfessor = this.accountService.isProfessor;
      this.isStaff = this.accountService.isStaff;
      this.isLogged = this.accountService.isLogged;
  }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }

  logout() {
    this.accountService.logout();
  }

}
