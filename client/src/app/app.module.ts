import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListAlunoComponent } from './views/Aluno/list-aluno/list-aluno.component';
import { CreateAlunoComponent } from './views/Aluno/create-aluno/create-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAlunoComponent,
    CreateAlunoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
