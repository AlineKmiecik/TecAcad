import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './views/aluno/list-aluno/list-aluno.component';
import { ListProfessorComponent } from './views/professor/list-professor/list-professor.component';
import { ListAtividadeComponent } from './views/atividade/list-atividade/list-atividade.component';
import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';
import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';
import { CreateTreinoComponent } from './views/treino/create-treino/create-treino.component';
import { CreateAlunoComponent } from './views/aluno/create-aluno/create-aluno.component';
import { CreateProfessorComponent } from './views/professor/create-professor/create-professor.component';
import { CreateAtividadeComponent } from './views/atividade/create-atividade/create-atividade.component';
import { UpdateAlunoComponent } from './views/aluno/update-aluno/update-aluno.component';

//Auto import

const routes: Routes = [
  //rotas para aluno
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'aluno/list', 
    component: ListAlunoComponent
  },
  {
    path: 'aluno/create', 
    component: CreateAlunoComponent
  },
  {
    path: 'aluno/update:Cpf_Aluno', 
    component: UpdateAlunoComponent
  },
  {
    path: 'aluno/update', 
    component: UpdateAlunoComponent
  },

  //rotas para professor
  {
    path: 'professor/list', 
    component: ListProfessorComponent
  },
  {
    path: 'professor/create', 
    component: CreateProfessorComponent
  },
  //rotas para atividade
  {
    path: 'atividade/list', 
    component: ListAtividadeComponent
  },
  {
    path: 'atividade/create', 
    component: CreateAtividadeComponent
  },
  //rotas para mensalidade
  {
    path: 'mensalidade/list', 
    component: ListMensalidadeComponent
  },
  //rotas para treino
  {
    path: 'treino/list', 
    component: ListTreinoComponent
  },
  {
    path: 'treino/create', 
    component: CreateTreinoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
