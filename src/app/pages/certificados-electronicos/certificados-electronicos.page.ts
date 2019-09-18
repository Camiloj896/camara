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
 
  OpenLink(url: string){    
    
    let options:InAppBrowserOptions = {
      zoom: 'no',
      footer: 'no',
      hideurlbar: 'yes',
      toolbarcolor: '#071442',
      closebuttoncolor: "white",
      navigationbuttoncolor: "white"
    };

    const link = url;

    const link_browser = this.browser.create(link, "_self", options);
    link_browser.show();
  }
}
