import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-first-with-tabs',
  templateUrl: './first-with-tabs.page.html',
  styleUrls: ['./first-with-tabs.page.scss'],
})
export class FirstWithTabsPage implements OnInit {

  constructor(private browser:InAppBrowser) {}

  ngOnInit() {
  }

  urlChat(){
    const Chat = this.browser.create("https://webchat.millenium.com.co/webchatccb/userinfo.jsp?chatID=1568385300856&workgroup=agentesccb@workgroup.chatminco.millenium.com.co" , "_self");
    Chat.show();
  }

}
