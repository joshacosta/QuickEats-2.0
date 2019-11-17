import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouletteDetailsPage } from './roulette-details';

@NgModule({
  declarations: [
    RouletteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RouletteDetailsPage),
  ],
})
export class RouletteDetailsPageModule {}
