import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './views/aluno/list-aluno/list-aluno.component';
import { ListProfessorComponent } from './views/professor/list-professor/list-professor.component';
import { ListAtividadeComponent } from './views/atividade/list-atividade/list-atividade.component';
import { ListMensalidadeComponent } from './views/mensalidade/list-mensalidade/list-mensalidade.component';
import { ListTreinoComponent } from './views/treino/list-treino/list-treino.component';


//Auto import

const routes: Routes = [
  {
    path: '', 
    component: ListAlunoComponent
  },
  {
    path: 'aluno/list', 
    component: ListAlunoComponent
  },
  {
    path: 'professor/list', 
    component: ListProfessorComponent
  },
  {
    path: 'atividade/list', 
    component: ListAtividadeComponent
  },
  {
    path: 'mensalidade/list', 
    component: ListMensalidadeComponent
  },
  {
    path: 'treino/list', 
    component: ListTreinoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
