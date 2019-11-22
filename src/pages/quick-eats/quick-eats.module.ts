import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickEatsPage } from './quick-eats';

@NgModule({
  declarations: [
    QuickEatsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickEatsPage),
  ],
})
export class QuickEatsPageModule {}
