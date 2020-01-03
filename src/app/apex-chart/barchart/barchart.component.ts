import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexChart from 'apexcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})

export class BarchartComponent implements OnInit {
  barChart: number = 1;
  ids: any[] = [];
  data: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  xaxis: any[] = ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'];
  options: any[] = [];
  chart: any;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.data[i] = i;
    }
    this.makeArray(this.barChart);
  }

  showChart(id, option) {
    this.chart = new ApexChart(document.querySelector(`#chart${id}`), option);
    this.chart.render();
  }

  makeArray(value) {
    this.ids = [];
    for (let i = 0; i < value; i++) {
      this.ids.push(i);
    }
  }

  showBarChart() {
    for (let i = 0; i < this.barChart; i++) {
      this.options[i] = {
        series: [{
          data: this.data.map(() => Math.ceil(Math.random() * 10000))
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        dataLabels: {
          show: false,
          name : {
            show: false
          },
          value : {
            show : false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
          }
        },
        xaxis: {
          categories: this.xaxis,
        }
      };
    }


    console.log(this.ids);
    for (let i = 0; i < this.barChart; i++) {
      this.showChart(i, this.options[i]);
    }
  }

}

// [Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000),Math.ceil(Math.random()*1000)]
// this.data.map(() => Math.ceil(Math.random()*10000))