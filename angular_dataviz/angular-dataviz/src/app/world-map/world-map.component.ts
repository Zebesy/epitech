import { Component, OnInit } from '@angular/core';
import Overlay from 'ol/Overlay';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {DataService} from "../data.service";
import {fromLonLat} from 'ol/proj';
import Icon from 'ol/style/Icon';
import {Fill, Stroke, Circle, Style} from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {toStringXY} from 'ol/coordinate';
import {element} from "protractor";
@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  map;
  dataArray: any = [];
  coord = [2.333333, 48.866667];
  parisCoordinate = fromLonLat(this.coord);

 public newCoord:any=[];
  markerParis;
  test= [ 2.7010051, 48.4044902 ];
  testt= fromLonLat(this.test);
  financialHelp: any;
  fill;
  stroke;
  vectorSource;
  vectorLayer;
  baseMapLayer;

  constructor(private httpClient: DataService) {
  }

  ngOnInit(): void {
    this.initialize()

    console.log(this.newCoord)

console.log(this.coord)
  }

  initialize() {
    this.httpClient.getDataViz().subscribe(data => {

      this.dataArray = data;


        this.mapView(this.dataArray)


    })

  }


  createDiv(number){
    let div = document.createElement('div');
    div.setAttribute('class', 'new')
    div.setAttribute('id', 'new'+  number)
    div.style.width= '10px';
    div.style.height= '10px';
    div.style.borderRadius= '10px';
    div.style.backgroundColor= 'blue';
    div.style.opacity= '0.4';
    document.body.appendChild(div);
    console.log('divResult', div)
  }



  mapView(data) {

    this.baseMapLayer = new TileLayer({
      source: new OSM()
    })

    this.map = new Map({
      target: 'map',
      layers: [
        this.baseMapLayer
      ],
      view: new View({
        center: this.parisCoordinate,
        zoom: 11
      })


    });
    this.markerParis = new Feature({
      geometry: new Point(
        this.parisCoordinate
      )
    })

    this.vectorSource = new VectorSource({
      features: [this.markerParis]
    })

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    })

    this.map.addLayer(this.vectorLayer)


    let paris = new Overlay({
      element: document.getElementById('popup')
    });
    paris.setPosition(this.parisCoordinate);
    this.map.addOverlay(paris);

for(let i= 0; i<=this.dataArray.length; i++) {

this.createDiv(i)

  let financeHelp = new Overlay({
    element: document.getElementById('new'+ i)
  });

  financeHelp.setPosition(fromLonLat(data[i].geometry.coordinates))
  this.map.addOverlay(financeHelp);

}


  }





}
