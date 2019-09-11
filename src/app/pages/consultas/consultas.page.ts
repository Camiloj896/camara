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

  LinkRenovacion(){
    let options:InAppBrowserOptions = {
      hidden:"yes",
      hidenavigationbuttons:"yes",
      hideurlbar: "yes",
      hardwareback: "yes",
      footer: "yes",
      footercolor: "blue"
    }
    this.browser.create("https://linea.ccb.org.co/apprenovaciones/index.html#!/" , "_self")
  }

}
