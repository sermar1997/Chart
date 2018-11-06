import { Component, OnInit, Input } from "@angular/core";
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: "app-doughnutchart",
  templateUrl: "./doughnutchart.component.html",
  styleUrls: ["./doughnutchart.component.css"]
})
export class DoughnutchartComponent implements OnInit {
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
      this.Chart = this.AmCharts.makeChart(
        "doughnutdiv",
        this.makeDoughnutOptions()
      );
    }
  }
  makeDoughnutOptions() {
    return {
      type: "pie",
      theme: "light",
      innerRadius: "40%",
      gradientRatio: [
        -0.4,
        -0.4,
        -0.4,
        -0.4,
        -0.4,
        -0.4,
        0,
        0.1,
        0.2,
        0.1,
        0,
        -0.2,
        -0.5
      ],
      dataProvider: [
        {
          country: "Lithuania",
          litres: 501.9
        },
        {
          country: "Czech Republic",
          litres: 301.9
        },
        {
          country: "Ireland",
          litres: 201.1
        },
        {
          country: "Germany",
          litres: 165.8
        },
        {
          country: "Australia",
          litres: 139.9
        },
        {
          country: "Austria",
          litres: 128.3
        }
      ],
      balloonText: "[[value]]",
      valueField: "litres",
      titleField: "country",
      balloon: {
        drop: true,
        adjustBorderColor: false,
        color: "#FFFFFF",
        fontSize: 16
      },
      export: {
        enabled: true
      }
    };
  }
}
