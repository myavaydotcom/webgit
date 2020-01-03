import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements OnInit {
  type: any[] = ['bar','column'];
  options: any = {
    chart: {
      type: this.type[0],
      renderTo: 'highchart'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'pineapple']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }, {
      name: 'ankit',
      data: [3, 40, 90]
    }]
  }

  constructor() { }

  ngOnInit() {
    this.showHighChart();
  }

  showHighChart() {
    Highcharts.chart(this.options);
  }
  
  changeChartType(){  
     this.options.chart.type = this.type[Math.random() > 0.5 ? 0 : 1];
    Highcharts.chart(this.options);
  }
}
