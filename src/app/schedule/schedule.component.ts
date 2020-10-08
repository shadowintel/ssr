import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScheduleramsomeService } from '../_services';
import { NgxSpinnerService } from 'ngx-spinner';
declare const $: any;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  dtOptions: any = {};
  routeSubscription: Subscription;
  tableData = [];
  newsletterData: any = {};
  industry = ''
  isInvalid: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private scheduleramsomeService: ScheduleramsomeService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    const scheduleId = this.activatedRoute.snapshot.params.id;
    this.scheduleramsomeService.getScheduleData({ "id": scheduleId }).subscribe((res: any) => {
      console.log('this is res: ', res)
      this.newsletterData["startDate"] = res.startDate;
      this.newsletterData["endDate"] = res.endDate;
      this.newsletterData["type"] = res.type;
      this.industry = res.industry;
      this.tableData = res.result;
      this.tableData = this.tableData.map((item: any) => {
        if (typeof item['employees'] == 'string') {
          item['employees'] = parseInt(item['employees'].replace(/,/g, ''));
        }
        return item;
      })
      $(document).ready(function () {
        $('#datatables').DataTable({
          buttons: [
            'print'
          ]
        });

      });
      this.spinner.hide();
    }, (error) => {
      this.isInvalid = true;
      this.spinner.hide();
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  onDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
