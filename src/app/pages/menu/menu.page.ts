import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    // {
    //   title: 'First Page with Tabs',
    //   url: '/menu/first'
    // },
    // {
    //   title: 'Second Page blank',
    //   url: '/menu/second'
    // }
  ];
 
  constructor(private router: Router, private browser : InAppBrowser) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
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
 
  ngOnInit() {
 
  }
 
}