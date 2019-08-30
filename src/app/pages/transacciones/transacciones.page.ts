import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.page.html',
  styleUrls: ['./transacciones.page.scss'],
})
export class TransaccionesPage implements OnInit {

  constructor(private browser : InAppBrowser) { }

  ngOnInit() {
  }

  openUrl(){
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
