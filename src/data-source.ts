import "reflect-metadata";
import { DataSource } from "typeorm";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: ["./src/entity/*.ts"],
  migrations: ["./src/migration/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Initialized Data Source succesfully");
  })
  .catch((error) => {
    console.error("Fail Data Source", error);
  });
