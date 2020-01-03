import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexChart from 'apexcharts';

@Component({
  selector: 'app-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.scss']
})
export class CandleChartComponent implements OnInit {
  options: object = {
    chart:{
       type: 'candle',
       name: 'NYSE'
    },
    series: [{
      data: [{
        x: new Date(2020, 1, 1),
        y: [51.98, 56.29, 51.59, 53.85]
      },
      {
        x: new Date(2020, 2, 1),
        y: [53.66, 54.99, 51.35, 52.95]
      },
      {
        x: new Date(2020, 8, 1),
        y: [52.76, 57.35, 52.15, 57.03]
      }]
    }],
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3C90EB',
          downward: '#DF7D46'
        }
      }
    },

  } 

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    let chart = new ApexChart(document.querySelector('#chart'), this.options);
    chart.render();
  }

}
