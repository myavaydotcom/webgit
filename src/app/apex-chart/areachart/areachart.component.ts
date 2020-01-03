import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss']
})
export class AreachartComponent implements OnInit {
  options: object = {
    series: [{
      name: 'net revenue',
      type: 'area',
      data: [30, 140, 45, 250, 9, 91, 125, 90]
    },
    {
      name: 'net profit',
      type: 'column',
      data: [2, 5, 12, 98, 43, 112, 67, 23]
    }],
    chart:
    {
      height: 350,
      type: 'area',
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'solid',
      opacity: [0.8, 1],
    },
    xaxis: {
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90]
    }
  }

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    let chart = new ApexCharts(document.querySelector('#chart'), this.options);
    chart.render();
  }

}
