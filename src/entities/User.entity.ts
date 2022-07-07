import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  name?: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  age?: number;
  @CreateDateColumn()
  createAt?: Date;
  @UpdateDateColumn()
  updateAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
