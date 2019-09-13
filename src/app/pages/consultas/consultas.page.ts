import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  openAsesoria(){
    const Asesoria = this.browser.create("https://asesoriavirtual.ccb.org.co:8825/SeleccionServicioCita.aspx" , "_self");
    Asesoria.show();
  }

  LinkRenovacion(){    
    const renovaciones = this.browser.create("https://linea.ccb.org.co/apprenovaciones/index.html#!/" , "_self")
    renovaciones.show();
  }

}
