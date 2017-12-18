import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider, User } from '../../providers/users/users';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private usersProvider: UsersProvider) {
    this.user = new User();
  }

  signup(): void {
    this.usersProvider.getUserByEmail(this.user.email).then((result: any) => {
      if (result == null) {
        this.usersProvider.insert(this.user).then(() => {
          this.toast.create({ message: 'Conta criada.', duration: 3000, position: 'bottom' }).present();
          this.navCtrl.pop();
        }).catch(() => {
          this.toast.create({ message: 'Erro ao criar conta.', duration: 3000, position: 'bottom' }).present();
        });
      } else {
        this.toast.create({ message: 'Email já cadastrado.', duration: 3000, position: 'bottom' }).present();
      }
    }).catch((e) => console.error(e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
