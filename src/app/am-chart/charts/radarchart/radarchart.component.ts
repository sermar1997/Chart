import { Component, OnInit, Input } from "@angular/core";
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: "app-radarchart",
  templateUrl: "./radarchart.component.html",
  styleUrls: ["./radarchart.component.css"]
})
export class RadarchartComponent implements OnInit {
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
      this.Chart = this.AmCharts.makeChart("radardiv", this.makeRadarOptions());
    }
  }
  makeRadarOptions() {
    return {
      type: "radar",
      theme: "light",
      dataProvider: [
        {
          country: "Czech Republic",
          litres: 156.9
        },
        {
          country: "Ireland",
          litres: 131.1
        },
        {
          country: "Germany",
          litres: 115.8
        },
        {
          country: "Australia",
          litres: 109.9
        },
        {
          country: "Austria",
          litres: 108.3
        },
        {
          country: "UK",
          litres: 99
        }
      ],
      valueAxes: [
        {
          axisTitleOffset: 20,
          minimum: 0,
          axisAlpha: 0.15
        }
      ],
      startDuration: 2,
      graphs: [
        {
          balloonText: "[[value]] litres of beer per year",
          bullet: "round",
          lineThickness: 2,
          valueField: "litres"
        }
      ],
      categoryField: "country",
      export: {
        enabled: true
      }
    };
  }
}
