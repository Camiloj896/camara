import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TransaccionesPage } from './transacciones.page';
import { ComponentsModule } from './../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: TransaccionesPage
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
  declarations: [TransaccionesPage]
})
export class TransaccionesPageModule {}
