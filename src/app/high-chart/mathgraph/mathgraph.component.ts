import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-mathgraph',
  templateUrl: './mathgraph.component.html',
  styleUrls: ['./mathgraph.component.scss']
})
export class MathgraphComponent implements OnInit {
  userData: any = [1, 2, 3, 4, 5];
  data: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  dataForBubble: any[] = [];
  options1: any = {
    chart: {
      type: 'line',
      horizontal: false,
      zoomType: 'xy'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  };
  options2: any = {
    chart: {
      type: 'spline',
      inverted: true
    },
    title: {
      text: 'Atmosphere Temperature by Altitude'
    },
    subtitle: {
      text: 'According to the Standard Atmosphere Model'
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: 'Altitude'
      },
      labels: {
        format: '{value} km'
      },
      maxPadding: 0.05,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Temperature'
      },
      labels: {
        format: '{value}°'
      },
      lineWidth: 2
    },
    legend: {
      enabled: false
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x} km: {point.y}°C'
    },
    plotOptions: {
      spline: {
        marker: {
          enable: false
        }
      }
    },
    series: [{
      name: 'Temperature',
      data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
      [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
    }]
  };
  options3: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  }
  options4: any = {
    chart: {
      type: 'column',
      zoom: true
    },
    title: {
      text: 'Column chart with negative values on the scale of 10'
    },
    xAxis: {
      categories: ['CSE', 'Physics', 'Space Science', 'Quantum Mechanics', 'Sportive']
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Ankit',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Verma',
      data: [2, -2, -3, 2, 1]
    }, {
      name: 'Chris',
      data: [3, 4, 4, -2, 5]
    }]
  }
  options5: any = {
    chart: {
      zoomType: 'xy',
      height: 350
    },
    boost: {
      useGPUTranslations: true,
      usePreAllocated: true
    },
    xAxis: {
      min: 0,
      max: 100,
      gridLineWidth: 1
    },
    yAxis: {
      // Renders faster when we don't have to compute min and max
      min: 0,
      max: 100,
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: null
      }
    },
    title: {
      text: 'Scatter chart with 1 million points'
    },
    legend: {
      enabled: false
    },
    series: [{
      type: 'scatter',
      color: 'rgba(152,0,67,0.8)',
      data: this.userData,
      marker: {
        radius: 0.5
      },
      tooltip: {
        followPointer: false,
        pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
      }
    }]
  }

  constructor() { }

  ngOnInit() {
    this.showgraph('container1', this.options1);
    this.showgraph('container2', this.options2);
    this.showgraph('container3', this.options3);
    this.showgraph('container4', this.options4);
    this.showgraph('container5', this.options5);
  }

  showgraph(id, options) {
    Highcharts.chart(document.getElementById(id), options);
  }

  showMillionDots() {
    this.userData = [];
    for(let i = 0;i < 100 * 100;i++) {
      this.userData.push([
        Math.pow(Math.random(), 2) * 100,
        Math.pow(Math.random(), 2) * 100
      ]);
    }
    this.options5.series.data = this.userData;
    this.showgraph('container5',this.options5);
  }

  addNewUserOption4() {
    this.options4.series.push({ name: `User${Math.round(Math.random() * 10 | 0)}`, data: this.userData.map(() => Math.round(Math.random() * 10)) })
    this.showgraph('container4', this.options4);
  }

  liveAtmTemp() {
    this.options2.series[0].data = [];
    for (let i = 0; i < 9; i++) {
      this.options2.series[0].data.push([Math.ceil(Math.random() * 100 | 0), Math.ceil(Math.random() * 100 | 0)])
    }
    this.showgraph('container2', this.options2);
  }

  liveData() {
    this.options1.series = []
    for (let i = 0; i < (Math.floor(Math.random() * Math.floor(100)) + 1); i++) {
      this.options1.series.push({ name: `city${i}`, data: this.data.map(() => Math.round(Math.random() * 1000)) })
    }
    this.showgraph('container1', this.options1);
  }
}
