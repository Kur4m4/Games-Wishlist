import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the PlatformsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlatformsProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(platform: Platform) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'insert into platforms (name) values (?)';
      let data = [platform.name];

      return db.executeSql(sql, data).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }

  public getPlatform(platform_id: number) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'select * from platforms where id = ?';
      let data = [platform_id];

      return db.executeSql(sql, data).then((data: any) => {
        if (data.rows.length > 0) {
          return data.rows.item(0);
        } else {
          return null;
        }
      }).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }

  public getAll() {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      return db.executeSql('select * from platforms', []).then((data: any) => {
        if (data.rows.length > 0) {
          let platforms: any[] = [];
          for (var i = 0; i < data.rows.length; i++) {
            var platform = data.rows.item(i);
            platforms.push(platform);
          }
          return platforms;
        } else {
          return [];
        }
      }).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }
}

export class Platform {
  id: number;
  name: string;
}
