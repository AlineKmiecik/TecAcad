import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAlunoComponent } from './views/Aluno/create-aluno/create-aluno.component';
import { ListAlunoComponent } from './views/Aluno/list-aluno/list-aluno.component';


//Auto import

const routes: Routes = [
  {
    path: 'aluno/list', 
    component: ListAlunoComponent
  },
  {
    path: 'aluno/create', 
    component: CreateAlunoComponent
  },
  {
    path: 'aluno/create/:cpf', 
    component: CreateAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
