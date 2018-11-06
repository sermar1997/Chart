import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
//#region properties
public Chart: any;
@Input()
excelData: any;
datasets = [];
//#endregion
  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.loadChart(this.excelData);
  }
  loadChart(data) {
    if (data) {
      for (var key in data) {
        for (var value in data[key]) {
          let dataset = {
            key: value,
            value: data[key][value]
          };
          this.datasets.push(dataset);
        }
      }
      this.Chart = this.AmCharts.makeChart("bardiv", this.makeBarOptions());
    }
  }
  makeBarOptions() {
    return {
      theme: "light",
      type: "serial",
      startDuration: 2,
      dataProvider: [
        {
          country: "USA",
          visits: 4025,
          color: "#FF0F00"
        },
        {
          country: "China",
          visits: 1882,
          color: "#FF6600"
        },
        {
          country: "Japan",
          visits: 1809,
          color: "#FF9E01"
        },
        {
          country: "Germany",
          visits: 1322,
          color: "#FCD202"
        },
        {
          country: "UK",
          visits: 1122,
          color: "#F8FF01"
        },
        {
          country: "France",
          visits: 1114,
          color: "#B0DE09"
        },
        {
          country: "India",
          visits: 984,
          color: "#04D215"
        },
        {
          country: "Spain",
          visits: 711,
          color: "#0D8ECF"
        },
        {
          country: "Netherlands",
          visits: 665,
          color: "#0D52D1"
        },
        {
          country: "Russia",
          visits: 580,
          color: "#2A0CD0"
        },
        {
          country: "South Korea",
          visits: 443,
          color: "#8A0CCF"
        },
        {
          country: "Canada",
          visits: 441,
          color: "#CD0D74"
        },
        {
          country: "Brazil",
          visits: 395,
          color: "#754DEB"
        },
        {
          country: "Italy",
          visits: 386,
          color: "#DDDDDD"
        },
        {
          country: "Australia",
          visits: 384,
          color: "#999999"
        },
        {
          country: "Taiwan",
          visits: 338,
          color: "#333333"
        },
        {
          country: "Poland",
          visits: 328,
          color: "#000000"
        }
      ],
      valueAxes: [
        {
          position: "left",
          title: "Visitors"
        }
      ],
      graphs: [
        {
          balloonText: "[[category]]: <b>[[value]]</b>",
          fillColorsField: "color",
          fillAlphas: 1,
          lineAlpha: 0.1,
          type: "column",
          valueField: "visits"
        }
      ],
      depth3D: 20,
      angle: 30,
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: "country",
      categoryAxis: {
        gridPosition: "start",
        labelRotation: 90
      },
      export: {
        enabled: true
      }
    };
  }
}
