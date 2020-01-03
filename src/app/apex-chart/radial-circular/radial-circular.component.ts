import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-radial-circular',
  templateUrl: './radial-circular.component.html',
  styleUrls: ['./radial-circular.component.scss']
})
export class RadialCircularComponent implements OnInit {
  options1: object = {
    chart: {
      height: 280,
      type: "radialBar",
    },

    series: [65],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.12
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D489"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };

  options2: object = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [77],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        track: {
          background: '#999',
          startAngle: 235,
          endAngle: 260,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "grey",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };

  options3: object = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67, 84, 97, 61],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              },1) / w.globals.series.length + '%'
            }
          }
        }
      }
    },
    labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
  };

  constructor() { }
  ngOnInit() {
    this.showChart();
  }

  showChart() {
    let chart1 = new ApexCharts(document.querySelector('#chart1'), this.options1);
    chart1.render();

    let chart2 = new ApexCharts(document.querySelector('#chart2'), this.options2);
    chart2.render();

    let chart3 = new ApexCharts(document.querySelector('#chart3'), this.options3);
    chart3.render();

  }

}
