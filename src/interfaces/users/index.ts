export interface IUser {
  name: string;
  id: string;
  email: string;
  password: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}
