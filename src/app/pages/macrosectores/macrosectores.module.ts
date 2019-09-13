import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { MacrosectoresPage } from './macrosectores.page';

const routes: Routes = [
  {
    path: '',
    component: MacrosectoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MacrosectoresPage]
})
export class MacrosectoresPageModule {}
