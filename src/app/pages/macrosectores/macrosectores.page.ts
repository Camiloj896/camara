import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-macrosectores',
  templateUrl: './macrosectores.page.html',
  styleUrls: ['./macrosectores.page.scss'],
})
export class MacrosectoresPage implements OnInit {

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  UrlServicios(){
    const Asesoria = this.browser.create("https://www.ccb.org.co/Sectores/Servicios-empresariales/" , "_self");
    Asesoria.show();
  }

  UrlContruc(){
    const Asesoria = this.browser.create("https://www.ccb.org.co/Sectores/Construccion-y-energia" , "_self");
    Asesoria.show();
  }

  UrlSalud(){
    const Asesoria = this.browser.create("https://www.ccb.org.co/Sectores/Salud-y-quimicos" , "_self");
    Asesoria.show();
  }

  UrlModa(){
    const Asesoria = this.browser.create("https://www.ccb.org.co/Sectores/Moda" , "_self");
    Asesoria.show();
  }

  UrlAgro(){
    const Asesoria = this.browser.create("https://www.ccb.org.co/Sectores/Agropecuario-y-agroindustrial" , "_self");
    Asesoria.show();
  }

  UrlTurismo(){
    const Asesoria = this.browser.create("https://www.ccb.org.co/Sectores/Turismo-y-gastronomia" , "_self");
    Asesoria.show();
  }

}
