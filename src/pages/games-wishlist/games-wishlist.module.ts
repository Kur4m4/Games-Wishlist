import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamesWishlistPage } from './games-wishlist';

@NgModule({
  declarations: [
    GamesWishlistPage,
  ],
  imports: [
    IonicPageModule.forChild(GamesWishlistPage),
  ],
})
export class GamesWishlistPageModule {}
