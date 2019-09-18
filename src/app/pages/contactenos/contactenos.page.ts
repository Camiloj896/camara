import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  constructor(private browser:InAppBrowser, private callNumber: CallNumber) { }

  ngOnInit() {
  }

  Call(){
    this.callNumber.callNumber("3007176920", true).then(res => alert('Bien'+res)).catch(err => alert("Error"+err));
  }

  OpenLink(url: string){    
    
    let options:InAppBrowserOptions = {
      zoom: 'no',
      footer: 'no',
      toolbarcolor: '#071442',
      closebuttoncolor: "white",
      navigationbuttoncolor: "white"
    };

    const link = url;

    const link_browser = this.browser.create(link, "_self", options);
    link_browser.show();
  }

}
