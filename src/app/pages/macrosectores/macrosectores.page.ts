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
