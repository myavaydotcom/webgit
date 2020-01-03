import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {
  options: object = {
    chart: {
      type: 'heatmap',
      height: 350
    },
    series: [
      {
        name: "Series 1",
        data: [{
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: "Series 2",
        data: [{
          x: 'W1',
          y: 43
        }, {
          x: 'W2',
          y: 43
        }, {
          x: 'W3',
          y: 43
        }, {
          x: 'W4',
          y: 43
        }]
      },
      {
        name: "Series 3",
        data: [{
          x: 'W1',
          y: 3
        }, {
          x: 'W2',
          y: 48
        }, {
          x: 'W3',
          y: 41
        }, {
          x: 'W4',
          y: 93
        }]
      },
      {
        name: "Series 4",
        data: [{
          x: 'W1',
          y: 43
        }, {
          x: 'W2',
          y: 43
        }, {
          x: 'W3',
          y: 43
        }, {
          x: 'W4',
          y: 43
        }]
      },
      {
        name: "Series 5",
        data: [{
          x: 'W1',
          y: 43
        }, {
          x: 'W2',
          y: 43
        }, {
          x: 'W3',
          y: 45
        }, {
          x: 'W4',
          y: 12
        }]
      },
      {
        name: "Series 6",
        data: [{
          x: 'W1',
          y: 54
        }, {
          x: 'W2',
          y: 6
        }, {
          x: 'W3',
          y: 43
        }, {
          x: 'W4',
          y: 43
        }]
      }
    ],
    title: {
      text: 'HeatMap Chart '
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [{
            from: 0,
            to: 20,
            color: '#4f2',
            name: 'low',
          },
          {
            from: 21,
            to: 40,
            color: '#5ff',
            name: 'medium',
          },
          {
            from: 40,
            to: 55,
            color: '#FF4',
            name: 'high',
          }
          ]
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
