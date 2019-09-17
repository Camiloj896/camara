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

  openUrl(url: string){    
    
    let options:InAppBrowserOptions = {
      zoom: 'no',
      footer: 'no',
      hideurlbar: 'yes',
      toolbarcolor: '#071442'
    };

    const link = url;

    const link_browser = this.browser.create(link, "_self", options);
    link_browser.show();
  }

}
