import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  urlChat(){
    const Chat = this.browser.create("https://webchat.millenium.com.co/webchatccb/userinfo.jsp?chatID=1568385300856&workgroup=agentesccb@workgroup.chatminco.millenium.com.co" , "_self");
    Chat.show();
  }

  urlLlamadaVirtual(){
    const Llamada = this.browser.create("https://webrtc.millenium.com.co/clicktocall/ccb/clicktocall.html" , "_self");
    Llamada.show();
  }


}
