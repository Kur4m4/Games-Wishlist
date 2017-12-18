import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';
import { PlatformsProvider, Platform } from '../platforms/platforms';

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesProvider {

  constructor(private dbProvider: DatabaseProvider, private platformsProvider: PlatformsProvider) { };

  public insert(game: Game) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'insert into games (title, user_id, platform_id) values (?, ?, ?)';
      let data = [game.title, game.user_id, game.platform_id];

      return db.executeSql(sql, data).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }

  public update(game: Game) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'update games set title = ?, platform_id = ? where id = ?';
      let data = [game.title, game.platform_id, game.id];

      return db.executeSql(sql, data).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'delete from games where id = ?';
      let data = [id];

      return db.executeSql(sql, data).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }

  public getUserWishlist(user_id: number) {
    return this.dbProvider.getDB().then((db: SQLiteObject) => {
      let sql = 'select * from games where user_id = ? order by title';
      let data = [user_id];

      return db.executeSql(sql, data).then((data: any) => {
        if (data.rows.length > 0) {
          let games: any[] = [];
          for (var i = 0; i < data.rows.length; i++) {
            var game = data.rows.item(i);
            this.platformsProvider.getPlatform(game.platform_id).then((platform: Platform) => {
              game.platform = platform;
            });
            games.push(game);
          }
          return games;
        } else {
          return [];
        }
      }).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }
}

export class Game {
  id: number;
  title: string;
  user_id: number;
  platform_id: number;
  platform: Platform;
}
