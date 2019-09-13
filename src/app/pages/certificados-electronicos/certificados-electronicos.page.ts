import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-certificados-electronicos',
  templateUrl: './certificados-electronicos.page.html',
  styleUrls: ['./certificados-electronicos.page.scss'],
})
export class CertificadosElectronicosPage implements OnInit {

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  LinkSolicitud(){    
    const Solicitud = this.browser.create("https://linea.ccb.org.co/CertificadosElectronicosR/Index.html#/buscar-inscritos" , "_self");
    Solicitud.show();
  }

  LinkDescarga(){    
    const Descarga = this.browser.create("https://linea.ccb.org.co/CertificadosElectronicosR/Index.html#/descargas" , "_self");
    Descarga.show();
  }

  LinkVerificacion(){
    const Verificacion = this.browser.create("http://s3.amazonaws.com/validacertificados/Index.html#/verificacion" , "_self");
    Verificacion.show();
  }

}
