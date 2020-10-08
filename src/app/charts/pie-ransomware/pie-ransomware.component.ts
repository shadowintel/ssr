import { AfterViewInit, Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts/dist/apexcharts.amd.js';
import { ChartService } from '../../_services';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-pie-ransomware',
  templateUrl: './pie-ransomware.component.html',
  styleUrls: ['./pie-ransomware.component.scss']
})
export class PieRansomwareComponent implements OnInit {
  ransomewareCountsSeries: Array<any> = [];
  ransomewareCountsLable: Array<any> = [];
  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.getRansomCount();
  }

  getRansomCount(): void {
    this.chartService.getRansomeCountPerRansomware().subscribe(data => {
      for (const rc of data) {
        this.ransomewareCountsSeries.push(rc.total);
        this.ransomewareCountsLable.push(rc._id);
      }
      this.loadChart();
    });
  }

  loadChart(): void {
    const chartOptions = {
      chart: {
        type: 'donut',
        toolbar: {
          show: true
        }
      },
      series: this.ransomewareCountsSeries,
      labels: this.ransomewareCountsLable,
      legend: {
        show: true
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 375
            },
            legend: {
              show: true,
              position: 'bottom'
            }
          }
        }
      ]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), chartOptions)
    chart.render();
  }
}
