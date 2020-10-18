import { Atividade } from "./Atividade";
import { User } from "./User";

export class Treino {
    _id?: string;
    date: Date;
    student: User;
    teacher: User;
    activities: [Atividade];
    concluded: boolean;
    createdAt?: Date;
  }