import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './views/Aluno/list-aluno/list-aluno.component';
//import { ListProfessorComponent } from './views/professor/list-professor/list-professor.component';
import { ListAtividadeComponent } from './views/atividade/list-atividade/list-atividade.component';
import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';
import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';
import { CreateTreinoComponent } from './views/treino/create-treino/create-treino.component';
import { CreateAtividadeComponent } from './views/atividade/create-atividade/create-atividade.component';
import { LoginComponent } from './account/login.component';
//import { UpdateAlunoComponent } from './views/aluno/update-aluno/update-aluno.component';
import { AuthGuard } from './helpers/auth.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  //rotas para aluno
  {
    path: '', 
    component: HomeComponent
  },
  { path: 'account',
    loadChildren: accountModule
  },
  {
    path: 'list/student', 
    component: ListAlunoComponent
  },
  /*
  {
    path: 'aluno/create', 
    component: CreateAlunoComponent
  },
  {
    path: 'aluno/update/:cpfAluno', 
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
  }, */
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
    path: 'list/treino', 
    component: ListTreinoComponent
  },
  {
    path: 'treino/create', 
    component: CreateTreinoComponent
  },
  {
    path: 'dd', 
    component: LoginComponent
  },
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
