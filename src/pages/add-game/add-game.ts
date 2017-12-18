import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { GamesProvider, Game } from '../../providers/games/games';
import { PlatformsProvider } from '../../providers/platforms/platforms';

/**
 * Generated class for the AddGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-game',
  templateUrl: 'add-game.html',
})
export class AddGamePage {
  game: Game;
  platforms: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private gamesProvider: GamesProvider, private platformsProvider: PlatformsProvider) {
    this.game = new Game();

    if (this.navParams.get("game")) {
      this.game = this.navParams.get("game");
    }
  }

  ionViewDidLoad() {
    this.platformsProvider.getAll().then((result: any[]) => {
      this.platforms = result;
    }).catch(() => {
      this.toast.create({ message: 'Erro ao carregar as plataformas.', duration: 3000, position: 'bottom' }).present();
    });
  }

  salvar() {
    this.saveGame().then(() => {
      this.toast.create({ message: 'Jogo salvo.', duration: 3000, position: 'bottom' }).present();
      this.navCtrl.pop();
    }).catch(() => {
      this.toast.create({ message: 'Erro ao salvar o jogo.', duration: 3000, position: 'bottom' }).present();
    });
  }

  private saveGame() {
    if (this.game.id) {
      return this.gamesProvider.update(this.game);
    } else {
      this.game.user_id = this.navParams.get("user_id");
      return this.gamesProvider.insert(this.game);
    }
  }
}
