import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../_services';

@Component({
  selector: 'app-revenue-table',
  templateUrl: './revenue-table.component.html',
  styleUrls: ['./revenue-table.component.scss']
})
export class RevenueTableComponent implements OnInit {
  revenueData = [];

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.getRevenueData();
  }

  getRevenueData() {
    this.chartService.getRevenue().subscribe((res: any) => {
      this.revenueData = res.averageData;
      const totalData = res.totalData;
      this.revenueData.forEach((element1: any) => {
        element1['totalValue'] = 0;
        totalData.forEach((element2: any) => {
          if (element1['_id'] === element2['_id']) {
            element1['totalValue'] = element2['total']
          }
        });
      });
      console.log('reven: ', this.revenueData)
    })
  }

}
