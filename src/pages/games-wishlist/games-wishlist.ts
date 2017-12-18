import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AddGamePage } from '../add-game/add-game';
import { GamesProvider, Game } from '../../providers/games/games';

/**
 * Generated class for the GamesWishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games-wishlist',
  templateUrl: 'games-wishlist.html',
})
export class GamesWishlistPage {
  user_id: number;
  games: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private gamesProvider: GamesProvider) {
    this.user_id = navParams.get("user_id");
  }

  ionViewDidEnter() {
    this.getUserWishlist();
  }

  getUserWishlist(): void {
    this.gamesProvider.getUserWishlist(this.user_id).then((result: any[]) => {
      this.games = result;
    }).catch(() => {
      this.toast.create({ message: 'Erro ao carregar lista de desejos.', duration: 3000, position: 'bottom' }).present();
    });
  }

  addGame(): void {
    this.navCtrl.push(AddGamePage, { user_id: this.user_id });
  }

  editGame(game: Game) {
    this.navCtrl.push(AddGamePage, { game: game });
  }

  removeGame(game: Game) {
    this.gamesProvider.remove(game.id).then(() => {
      this.getUserWishlist();
      this.toast.create({ message: 'Jogo removido.', duration: 3000, position: 'bottom' }).present();
    }).catch(() => {
      this.toast.create({ message: 'Erro ao remover jogo.', duration: 3000, position: 'bottom' }).present();
    })
  }
}
