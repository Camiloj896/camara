import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-turnos-citas',
  templateUrl: './turnos-citas.page.html',
  styleUrls: ['./turnos-citas.page.scss'],
})
export class TurnosCitasPage implements OnInit {

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  LinkTurnos(){    
    const Turnos = this.browser.create("https://agendamiento.ccb.org.co/DatosTurnoUsuario.aspx" , "_self")
    Turnos.show();
  }

  LinkCitas(){    
    const Citas = this.browser.create("https://agendamiento.ccb.org.co/CitaUsuario.aspx" , "_self")
    Citas.show();
  }

}
