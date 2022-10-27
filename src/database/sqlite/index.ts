import path from "path";
import { Database, verbose } from "sqlite3";

verbose()

export async function sqliteConnection() {
  const db = new Database(path.resolve(__dirname, "..", "database.db"), (err) => {
    if(err) {
      return console.error(err.message);
    }
    console.log("Connection successful");

  });

  return db
}
