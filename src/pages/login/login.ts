import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup'
import { GamesWishlistPage } from '../games-wishlist/games-wishlist';
import { UsersProvider, User } from '../../providers/users/users';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private usersProvider: UsersProvider) {
  }

  logar(): void {
    this.usersProvider.getUserByEmail(this.email).then((result: User) => {
      if (result != null && result.password == this.senha) {
        this.navCtrl.push(GamesWishlistPage, { user_id: result.id });
      } else {
        this.toast.create({ message: 'Dados inválidos', duration: 3000, position: 'bottom' }).present();
      }
    }).catch((e) => console.error(e));
  }

  criarConta(): void {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
