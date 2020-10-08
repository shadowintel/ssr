import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ChartService } from 'src/app/_services';

@Component({
  selector: 'app-bubble-map',
  templateUrl: './bubble-map.component.html',
  styleUrls: ['./bubble-map.component.scss']
})
export class BubbleMapComponent implements OnInit {
  private chart: am4charts.XYChart;
  chartMetaData: any = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    private chartService: ChartService
  ) {
    this.getRansomCount();
  }

  ngOnInit(): void {
  }

  getRansomCount(): void {
    this.chartService.getRansomeCountPerCountry().subscribe((data: any[]) => {

        data.map((item: any) => {
          this.chartMetaData.push({
            id: item.iso2,
            name: item.country,
            value: item.total,
            color: "#00e396"
          })
      })
      console.log('this is chart meta data: ', data)
      this.loadChart();
    });
  }

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  loadChart() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
      // Create map instance
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.exclude = ["AQ"];
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeWidth = 0.5;
      polygonSeries.calculateVisualCenter = true;

      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.data = this.chartMetaData;
      imageSeries.dataFields.value = "value";

      let imageTemplate = imageSeries.mapImages.template;
      imageTemplate.nonScaling = true

      let circle = imageTemplate.createChild(am4core.Circle);
      circle.fillOpacity = 0.7;
      circle.propertyFields.fill = "color";
      circle.tooltipText = "{name}: [bold]{value}[/]";


      imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 4,
        "max": 30,
        "dataField": "value"
      })

      imageTemplate.adapter.add("latitude", function (latitude, target) {
        let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);
        if (polygon) {
          return polygon.visualLatitude;
        }
        return latitude;
      })

      imageTemplate.adapter.add("longitude", function (longitude, target) {
        let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);
        if (polygon) {
          return polygon.visualLongitude;
        }
        return longitude;
      })
    });
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
