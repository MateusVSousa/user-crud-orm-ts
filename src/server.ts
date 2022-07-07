import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  console.log("DataBase Conected");
  const port = process.env.RUN_PORT ?? 3000;
  app.listen(port, ()=>{
    console.log(`App running in localhost:${port}/`)
  })
}).catch((err)=> console.error(err));
