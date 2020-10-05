import { Atividade_Treino } from "./Atividade_Treino";

export class Treino {
    _id?: string;
    Data_Treino: Date;
    Cpf_Aluno: string;
    Cpf_Professor: string;
    Atividade: [Atividade_Treino];
    createdAt?: Date;
  }