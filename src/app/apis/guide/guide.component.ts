import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as e from 'express';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApidocService } from 'src/app/_services';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  model: NgbDateStruct;

  requestJsonBody = {
    "ransomware": "Maze",
    "title": "",
    "startDate": "2020-10-01",
    "endDate": "",
    "industry": "",
    "country": "United States",
    "siteUrl": "",
    "iso2": "",
    "sector": "",
    "minRevenue": 0,
    "maxRevenue": 10000000000000,
    "minEmployees": 0,
    "maxEmployees": 110
  }
  apiKey = '';
  // apiKey = 'aj3223kdkk3sw39s9j390k2s';
  responseStatus = '';
  invalidQuery = false;
  responseBody: any;
  queryForm: FormGroup;

  constructor(
    private apiDocService: ApidocService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.queryForm = this.formBuilder.group({
      ransomware: [''],
      title: [''],
      startDate: [''],
      endDate: [''],
      industry: [''],
      country: [''],
      siteUrl: [''],
      iso2: [''],
      sector: [''],
      minRevenue: [],
      maxRevenue: [],
      minEmployees: [],
      maxEmployees: [],
    });
  }

  checkApiKey() {
    this.spinner.show('Checking...')
    this.apiDocService.checkApikey(this.apiKey).subscribe((res: any) => {
      console.log('res: ', res);
      this.responseStatus = 'OK 200';
      this.spinner.hide();
      this.responseBody = JSON.stringify(res, null, 2)
    }, (error) => {
      console.log('error to check api key: ', error);
      this.responseBody = JSON.stringify(error, null, 2);
      this.spinner.hide();
      this.responseStatus = error.statusText + ' ' + error.status;
    })
  }

  searchData() {
    this.queryForm.value.startDate
    console.log('form value: ', this.queryForm.value)
    let getQuery = {};
    for (const [key, value] of Object.entries(this.queryForm.value)) {
      if (value !== null) {
        if (key == 'startDate' || key == 'endDate') {
          if (value['year']) {
            getQuery[key] = value['year'] + '-' + value['month'] + '-' + value['day']
          }
        } else {
          getQuery[key] = value;
        }
      }
    }
    console.log(getQuery);

    this.apiDocService.serach(getQuery, this.apiKey).subscribe((res: any) => {
      this.responseStatus = 'OK 200';
      console.log('query result: ', res);
      const searchResult = res.result.map((item: any) => {
        item['month/year'] = this.timeConverter(item['month/year']);
        // item['timestamp'] = this.timeConverter(item['timestamp']);
        return item;
      })
      this.responseBody = JSON.stringify(searchResult, null, 2)
    }, (error) => {
      this.responseStatus = error.statusText + ' ' + error.status;
      this.responseBody = JSON.stringify(error, null, 2);
      console.log('error to query data: ', error);
    })
  }

  exportToJsonFile(dataStr) {
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = 'data.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  parseJSONToCSVStr(jsonData) {
    if (jsonData.length == 0) {
      return '';
    }

    let keys = Object.keys(jsonData[0]);

    let columnDelimiter = ',';
    let lineDelimiter = '\n';

    let csvColumnHeader = keys.join(columnDelimiter);
    let csvStr = csvColumnHeader + lineDelimiter;

    jsonData.forEach(item => {
      keys.forEach((key, index) => {
        if ((index > 0) && (index < keys.length - 1)) {
          csvStr += columnDelimiter;
        }
        csvStr += item[key];
      });
      csvStr += lineDelimiter;
    });

    return encodeURIComponent(csvStr);;
  }

  exportToCsvFile(responseBody) {
    const jsonData = JSON.parse(responseBody);
    let csvStr = this.parseJSONToCSVStr(jsonData);
    let dataUri = 'data:text/csv;charset=utf-8,' + csvStr;

    let exportFileDefaultName = 'data.csv';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var time = year + '-' + month + '-' + date;
    return time;
  }

}
