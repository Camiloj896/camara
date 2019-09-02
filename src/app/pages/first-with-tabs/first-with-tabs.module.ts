import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; 
import { IonicModule } from '@ionic/angular'; 
import { FirstWithTabsPage } from './first-with-tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: FirstWithTabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab1/consultas',
        loadChildren: '../consultas/consultas.module#ConsultasPageModule'
      },
      {
        path: 'tab1/transacciones',
        loadChildren: '../transacciones/transacciones.module#TransaccionesPageModule'
      },
      {
        path: 'tab1/consultas/certificados',
        loadChildren: '../certificados-electronicos/certificados-electronicos.module#CertificadosElectronicosPageModule'
      },
      {
        path: 'tab1/consultas/chat',
        loadChildren: '../chat/chat.module#ChatPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}