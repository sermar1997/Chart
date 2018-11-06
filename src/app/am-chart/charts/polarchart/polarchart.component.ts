import { Component, OnInit, Input } from "@angular/core";
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: "app-polarchart",
  templateUrl: "./polarchart.component.html",
  styleUrls: ["./polarchart.component.css"]
})
export class PolarchartComponent implements OnInit {
  //#region properties
  public Chart: any;
  @Input()
  excelData: any;
  datasets = [];
  //#endregion
  constructor(private AmCharts: AmChartsService) {}

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
      this.Chart = this.AmCharts.makeChart("polardiv", this.makePolarOptions());
    }
  }
  makePolarOptions() {
    return {
      type: "radar",
      theme: "light",
      dataProvider: [
        {
          direction: "N",
          value: 8
        },
        {
          direction: "NE",
          value: 9
        },
        {
          direction: "E",
          value: 4.5
        },
        {
          direction: "SE",
          value: 3.5
        },
        {
          direction: "S",
          value: 9.2
        },
        {
          direction: "SW",
          value: 8.4
        },
        {
          direction: "W",
          value: 11.1
        },
        {
          direction: "NW",
          value: 10
        }
      ],
      valueAxes: [
        {
          gridType: "circles",
          minimum: 0,
          autoGridCount: false,
          axisAlpha: 0.2,
          fillAlpha: 0.05,
          fillColor: "#FFFFFF",
          gridAlpha: 0.08,
          guides: [
            {
              angle: 225,
              fillAlpha: 0.3,
              fillColor: "#0066CC",
              tickLength: 0,
              toAngle: 315,
              toValue: 14,
              value: 0,
              lineAlpha: 0
            },
            {
              angle: 45,
              fillAlpha: 0.3,
              fillColor: "#CC3333",
              tickLength: 0,
              toAngle: 135,
              toValue: 14,
              value: 0,
              lineAlpha: 0
            }
          ],
          position: "left"
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: "[[category]]: [[value]] m/s",
          bullet: "round",
          fillAlphas: 0.3,
          valueField: "value"
        }
      ],
      categoryField: "direction",
      export: {
        enabled: true
      }
    };
  }
}
