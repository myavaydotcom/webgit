import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  series: any[] = [{
    name: "Radar Series 1",
    data: [45, 52, 38, 24, 33, 10, 9]
  },
  {
    name: "Radar Series 2",
    data: [26, 21, 20, 6, 8, 15, 12]
  },
  {
    name: "Radar Series 3",
    data: [29, 12, 11, 57, 43, 34, 49]
  }];

  options: object = {
    chart: {
      type: 'radar',
      height: 400
    },
    series: this.series,
    labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    fill: {
      opacity: 0.4,
      colors: ["#f3f", "#567", "#44f"]
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 1,
      colors: ["#000"],
      dashArray: 5
    },
    markers: {
      size: 2,
      hover: {
        size: 10
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: '#f64',
          fill: {
            colors: []
          }
        }
      }
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
