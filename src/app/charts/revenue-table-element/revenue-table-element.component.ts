import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-revenue-table-element',
  templateUrl: './revenue-table-element.component.html',
  styleUrls: ['./revenue-table-element.component.scss']
})
export class RevenueTableElementComponent implements OnInit {
  @Input() revenue: number;
  @Input() total: number;
  @Input() clients: number;
  @Input() title: string;
  @Input() index: number;
  color: string;

  colors = [
    '#007bff',
    '#6610f2',
    '#dc3545',
    '#20c997',
    '#ffc107',
    '#17a2b8',
    '#007bff',
    '#27677A',
    '#B9011B',
    '#8F0080',
    '#66A7F7',
    '#7F628D',
    '#F56164',
    '#80EDF4',
    '#f48024',
  ];
  constructor() { }

  ngOnInit(): void {
    const colorLength = this.colors.length;
    this.color = this.colors[this.index % colorLength];
  }

}
