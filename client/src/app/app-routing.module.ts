import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAlunoComponent } from './views/Aluno/create-aluno/create-aluno.component';
import { ListAlunoComponent } from './views/Aluno/list-aluno/list-aluno.component';


//Auto import

const routes: Routes = [
  {
    path: '', 
    component: ListAlunoComponent
  },
  {
    path: 'Aluno/create', 
    component: CreateAlunoComponent
  },
  {
    //quando for essa rota com um parametro ele vai para o createCycleComponent
    path: 'Aluno/create/:cpf', 
    component: CreateAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
