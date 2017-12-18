import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'games-wishlist.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB().then((db: SQLiteObject) => {
      this.createTables(db);
      this.insertDefaultItems(db);
    }).catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS users (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, email TEXT, password TEXT)'],
      ['CREATE TABLE IF NOT EXISTS platforms (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
      ['CREATE TABLE IF NOT EXISTS games (id integer primary key AUTOINCREMENT NOT NULL, title TEXT, user_id INTEGER, platform_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY(platform_id) REFERENCES platforms(id))']
    ]).then(() => console.log('Tabelas criadas')).catch(e => console.error('Erro ao criar as tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from platforms', {}).then((data: any) => {
      if (data.rows.item(0).qtd == 0) {
        db.sqlBatch([
          ['insert into platforms (name) values (?)', ['Nintendo 3DS']],
          ['insert into platforms (name) values (?)', ['Nintendo Switch']],
          ['insert into platforms (name) values (?)', ['PC']],
          ['insert into platforms (name) values (?)', ['PS3']],
          ['insert into platforms (name) values (?)', ['PS4™']],
          ['insert into platforms (name) values (?)', ['PSP']],
          ['insert into platforms (name) values (?)', ['PS Vita']],
          ['insert into platforms (name) values (?)', ['Wii U']],
          ['insert into platforms (name) values (?)', ['Xbox 360']],
          ['insert into platforms (name) values (?)', ['Xbox One']]
        ]).then(() => console.log('Dados padrões incluídos')).catch(e => console.error('Erro ao incluir dados padrões', e));
      }
    }).catch(e => console.error('Erro ao consultar a quantidade de plataformas', e));
  }
}
