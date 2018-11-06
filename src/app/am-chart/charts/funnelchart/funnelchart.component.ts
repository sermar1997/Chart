import { Component, OnInit, Input } from "@angular/core";
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: "app-funnelchart",
  templateUrl: "./funnelchart.component.html",
  styleUrls: ["./funnelchart.component.css"]
})
export class FunnelchartComponent implements OnInit {
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
        "funneldiv",
        this.makeFunnelOptions(this.datasets)
      );
      console.log(this.Chart);
    }
  }
  makeFunnelOptions(data) {
    return {
      type: "funnel",
      theme: "light",
      dataProvider: [
        {
          title: "Website visits",
          value: 200
        },
        {
          title: "Downloads",
          value: 123
        },
        {
          title: "Requested price list",
          value: 98
        },
        {
          title: "Contaced for more info",
          value: 72
        },
        {
          title: "Purchased",
          value: 35
        },
        {
          title: "Contacted for support",
          value: 35
        },
        {
          title: "Purchased additional products",
          value: 26
        }
      ],
      balloon: {
        fixedPosition: true
      },
      valueField: "value",
      titleField: "title",
      marginRight: 240,
      marginLeft: 50,
      startX: -500,
      depth3D: 100,
      angle: 40,
      outlineAlpha: 1,
      outlineColor: "#FFFFFF",
      outlineThickness: 2,
      labelPosition: "right",
      balloonText: "[[title]]: [[value]]n[[description]]",
      export: {
        enabled: true
      }
    };
  }
}
