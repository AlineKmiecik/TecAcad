import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAlunoComponent } from './views/aluno/list-aluno/list-aluno.component';
import { ListProfessorComponent } from './views/professor/list-professor/list-professor.component';
import { ListAtividadeComponent } from './views/atividade/list-atividade/list-atividade.component';
import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';
import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';
import { CreateTreinoComponent } from './views/treino/create-treino/create-treino.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAlunoComponent,
    ListProfessorComponent,
    ListAtividadeComponent,
    ListMensalidadeComponent,
    ListTreinoComponent,
    CreateTreinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
