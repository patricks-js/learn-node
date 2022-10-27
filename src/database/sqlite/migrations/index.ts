import { sqliteConnection } from "../index";
import { createUsers } from "./createUsers";


export async function migrationsRun() {
  const schemas = [
    createUsers
  ].join("")

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(err => console.error(err))
}
