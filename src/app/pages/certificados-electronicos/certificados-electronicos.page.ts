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
    let options:InAppBrowserOptions = {
      hidden:"yes",
      hidenavigationbuttons:"yes",
      hideurlbar: "yes",
      hardwareback: "yes",
      footer: "yes",
      footercolor: "blue"
    }
    this.browser.create("https://linea.ccb.org.co/CertificadosElectronicosR/Index.html#/buscar-inscritos" , "_self", options)
  }

  LinkDescarga(){
    let options:InAppBrowserOptions = {
      hidden:"yes",
      hidenavigationbuttons:"yes",
      hideurlbar: "yes",
      hardwareback: "yes",
      footer: "yes",
      footercolor: "blue"
    }
    this.browser.create("https://linea.ccb.org.co/CertificadosElectronicosR/Index.html#/descargas" , "_self", options)
  }

  LinkVerificacion(){
    let options:InAppBrowserOptions = {
      hidden:"yes",
      hidenavigationbuttons:"yes",
      hideurlbar: "yes",
      hardwareback: "yes",
      footer: "yes",
      footercolor: "blue"
    }
    this.browser.create("http://s3.amazonaws.com/validacertificados/Index.html#/verificacion" , "_self", options)
  }

}
