import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ListAlunoComponent } from './views/aluno/list-aluno/list-aluno.component';
//import { ListProfessorComponent } from './views/professor/list-professor/list-professor.component';
//import { UpdateAlunoComponent } from './views/aluno/update-aluno/update-aluno.component';
import { ListAtividadeComponent } from './views/atividade/list-atividade/list-atividade.component';
import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';
import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';
import { CreateTreinoComponent } from './views/treino/create-treino/create-treino.component';
import { NavbarComponent } from './views/pages/navbar/navbar.component';
//import { CreateProfessorComponent } from './views/professor/create-professor/create-professor.component';
//import { CreateAlunoComponent } from './views/aluno/create-aluno/create-aluno.component';
import { CreateAtividadeComponent } from './views/atividade/create-atividade/create-atividade.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    //ListAlunoComponent,
    //ListProfessorComponent,
    ListAtividadeComponent,
    ListMensalidadeComponent,
    ListTreinoComponent,
    CreateTreinoComponent,
    NavbarComponent,
    //CreateProfessorComponent,
    //CreateAlunoComponent,
    CreateAtividadeComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    //UpdateAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
