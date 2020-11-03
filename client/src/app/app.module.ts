import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './account/login.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { CreateAlunoComponent } from './views/users/aluno/create-aluno/create-aluno.component';
import { UpdateAlunoComponent } from './views/users/aluno/update-aluno/update-aluno.component';
import { ListAlunoComponent } from './views/users/aluno/list-aluno/list-aluno.component';

import { ListProfessorComponent } from './views/users/professor/list-professor/list-professor.component';
import { CreateProfessorComponent } from './views/users/professor/create-professor/create-professor.component';
import { UpdateProfessorComponent } from './views/users/professor/update-professor/update-professor.component';

import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';

import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';
import { CreateTreinoComponent } from './views/treino/create-treino/create-treino.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,

    CreateAlunoComponent,
    UpdateAlunoComponent,
    ListAlunoComponent,

    ListProfessorComponent,
    CreateProfessorComponent,
    UpdateProfessorComponent,

    ListMensalidadeComponent,

    ListTreinoComponent,
    CreateTreinoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AlertsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
