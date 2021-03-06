import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UbiquenosService } from './../../api/ubiquenos.service';

declare  var google;

@Component({
  selector: 'app-ubiquenos',
  templateUrl: './ubiquenos.page.html',
  styleUrls: ['./ubiquenos.page.scss'],
})
export class UbiquenosPage implements OnInit {
    
  ngOnInit() {
  } 

  sedesDetails: any=[];

  map:any;
  marker:any;
  latitude:any = "";
  longitude:any = "";
  timestamp:any = "";

  constructor(public platform:Platform, public geolocation:Geolocation, public ubiquenosService:UbiquenosService) { 
    
    this.platform.ready().then( ()=>{

      var mapOptions = {
        center:{lat:23.2366, lng:79.3822},
        zoom:7
      }

      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      this.Getlocation();

    })   
    
    this.GetSedesdata();

  }

  GetSedesdata(){
    this.ubiquenosService.getData().subscribe((data: Array<object>)=>{
      // var anyData = <any>data;      
      // this.sedesDetails = anyData.data
      for (let index = 0; index < data.length; index++) {
        this.sedesDetails[index] = data[index]
        console.log(this.sedesDetails[index]);
      }
    })    
    
      
  }

  Getlocation(){
    var ref = this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position)=>{
      var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      if(ref.marker == null){
        ref.marker = new google.maps.Marker({
          position:gps,
          map:ref.map,
          title:'My posición'
        });
      }else{
        ref.marker.setPosition(gps);
      }

      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
      ref.timestamp = (new Date(position.timestamp)).toString();
    })

  }

}
