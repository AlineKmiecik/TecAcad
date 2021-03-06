import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAlunoComponent } from './views/users/aluno/create-aluno/create-aluno.component';
import { UpdateAlunoComponent } from './views/users/aluno/update-aluno/update-aluno.component';
import { ListAlunoComponent } from './views/users/aluno/list-aluno/list-aluno.component';

import { CreateProfessorComponent } from './views/users/professor/create-professor/create-professor.component';
import { UpdateProfessorComponent } from './views/users/professor/update-professor/update-professor.component';
import { ListProfessorComponent } from './views/users/professor/list-professor/list-professor.component';

import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';

import { CreateTreinoComponent } from './views/treino/create-treino/create-treino.component';
import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  { path: 'account',
    loadChildren: accountModule
  },
  {
    path: 'list/treino', 
    component: ListTreinoComponent
  },
  {
    path: 'create/treino', 
    component: CreateTreinoComponent
  },
  {
    path: 'create/student', 
    component: CreateAlunoComponent
  },
  {
    path: 'list/student',
    component: ListAlunoComponent
  },
  {
    path: 'create/student/update/:id',
    component: UpdateAlunoComponent
  },
  {
    path: 'list/teacher', 
    component: ListProfessorComponent
  },
  {
    path: 'create/teacher', 
    component: CreateProfessorComponent
  },
  {
    path: 'create/teacher/update/:id', 
    component: UpdateProfessorComponent
  },
  {
    path: 'list/mensalidade', 
    component: ListMensalidadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
