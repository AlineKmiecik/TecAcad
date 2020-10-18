import { User } from "./User";

export class Mensalidade {
    _id?: string;
    date: Date;
    student: User;
    price: number;
    payed: boolean;
    createdAt?: Date;
  }