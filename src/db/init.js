//Usado apenas para criar as tabelas
const Database = require('./config')

const initDb = {
  async init() {
    // async -> sempre que o await for usado dentro de uma função essa função deve ser assíncrona
    const db = await Database() // await -> aguarda trazer o resultado do Databese para depois ir para a proxima linha.

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT 
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      read INT
    )`)

    await db.close()
  }
}

initDb.init()
