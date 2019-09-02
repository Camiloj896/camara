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

  openLink(){
    let options:InAppBrowserOptions = {
      hidden:"yes",
      hidenavigationbuttons:"yes",
      hideurlbar: "yes",
      hardwareback: "yes",
      footer: "yes",
      footercolor: "blue"
    }
    this.browser.create("https://www.ccb.org.co" , "_self", options)
  }

}
