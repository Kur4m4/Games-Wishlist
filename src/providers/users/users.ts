import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(user: User) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'insert into users (name, email, password) values (?, ?, ?)';
      let data = [user.name, user.email, user.password];

      return db.executeSql(sql, data).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }

  public getUserByEmail(email: string) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'select * from users where email = ?';
      let data = [email];

      return db.executeSql(sql, data).then((data: any) => {
        if (data.rows.length > 0) {
          return data.rows.item(0);
        }
        return null;
      }).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }
}

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
}
