import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import Heatmap from 'ol/layer/Heatmap';
import Overlay from 'ol/Overlay';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import 'ol/ol.css';
import KML from 'ol/format/KML';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  coord = [2.333333, 48.866667];
  parisCoordinate = fromLonLat(this.coord);
  heatData: any=[];

  constructor(private httpClient: DataService) { }

  ngOnInit(): void {
    this.initialize()

  }

  initialize() {
    this.httpClient.getDataViz().subscribe(data => {

      this.heatData = data;



      this.mapView(data)

    })

  }


  mapView(data) {

    let blur = document.getElementById('blur');
    let radius = document.getElementById('radius');
    let vector = new HeatmapLayer({
      source: new VectorSource({
        url: this.heatData[0].geometry.coordinates,
        format: new KML({
          extractStyles: false,
        }),

        // blur: parseInt(blur.value, 10),
        // radius: parseInt(radius.value, 10),
        weight: function (feature) {
          // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
          // standards-violating <magnitude> tag in each Placemark.  We extract it from
          // the Placemark's name instead.
          var name = feature.get('name');
          var magnitude = parseFloat(name.substr(2));
          return magnitude - 5;
        },
      })})


    let raster = new TileLayer({
      source: new Stamen({
        layer: 'toner',
      }),
    });

    let map = new Map({
      target: 'map',
      layers: [
        raster, vector
      ],
      view: new View({
        center: this.parisCoordinate,
        zoom: 11
      })


    });

    let coord = fromLonLat(data[5].geometry.coordinates);

    let lonLat = new Point(coord);
    let pointFeature = new Feature({
      geometry: lonLat,
      weight: 20 // e.g. temperature
    });

    map.addFeature(pointFeature);

    console.log(coord)

  }


}
