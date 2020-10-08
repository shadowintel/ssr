import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChartService } from '../../_services';
import ApexCharts from 'apexcharts/dist/apexcharts.amd.js';

@Component({
  selector: 'app-column-stacked',
  templateUrl: './column-stacked.component.html',
  styleUrls: ['./column-stacked.component.scss']
})
export class ColumnStackedComponent implements OnInit {
  chartData: any[] = [];
  series: any[] = [];
  categories: any[] = [];
  isMobileView: boolean;

  constructor(
    private chartService: ChartService,
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    this.isMobileView = this.deviceService.isMobile();
    this.chartService.getIndutry().subscribe((res: any) => {
      this.chartData = res;
      console.log('stack chart data: ', this.chartData);
      const categoryLength = this.chartData.length;
      this.chartData.map((item, index) => {
        this.categories.push(item._id);
        item.sectors.sort((a, b) => (a.value > b.value) ? -1 : ((b.value > a.value) ? 1 : 0));

        item.sectors.map((sector) => {
          let blankValue = new Array(categoryLength).fill(0);
          blankValue[index] = sector.value;
          const temp = {
            name: sector.sector,
            data: blankValue
          };
          this.series.push(temp);
        })
      });
      this.setChartOption();
    });
  }

  setChartOption(): void {
    const chartOptions = {
      series: this.series,
      chart: {
        type: "bar",
        height: 650,
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: this.isMobileView ? -0 : 0,
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: this.categories,
        labels: {
          rotate: this.isMobileView ? -45 : -20,
          style: {
            colors: [],
            fontSize: this.isMobileView ? '12px' : '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500,
            cssClass: 'apexcharts-xaxis-label',
          }
        }
      },
      legend: {
        show: false,
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };

    var chart = new ApexCharts(document.querySelector("#chartColumnStack"), chartOptions)
    chart.render();
  }

}
