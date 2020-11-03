import { User } from "./User";

export class Mensalidade {
    _id?: string;
    dueDate: Date;
    student: User;
    price: number;
    datePaid: Date;
    createdAt?: Date;
  }