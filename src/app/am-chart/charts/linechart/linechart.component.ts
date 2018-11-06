import { Component, OnInit, Input } from "@angular/core";
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: "app-linechart",
  templateUrl: "./linechart.component.html",
  styleUrls: ["./linechart.component.css"]
})
export class LinechartComponent implements OnInit {
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
        "chartdiv",
        this.makeLineOptions(this.datasets)
      );
    }
  }
  makeLineOptions(data) {
    return {
      type: "serial",
      theme: "light",
      categoryField: "key",
      marginTop: 0,
      marginRight: 80,
      dataProvider: data,
      valueAxes: [
        {
          axisAlpha: 0,
          position: "left"
        }
      ],
      graphs: [
        {
          id: "g1",
          balloonText:
            "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          bullet: "round",
          bulletSize: 8,
          lineColor: "#d1655d",
          lineThickness: 2,
          negativeLineColor: "#637bb6",
          type: "smoothedLine",
          valueField: "value"
        }
      ],
      chartScrollbar: {
        graph: "g1",
        gridAlpha: 0,
        color: "#888888",
        scrollbarHeight: 55,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.1,
        selectedBackgroundColor: "#888888",
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        graphLineColor: "#c2c2c2",
        selectedGraphLineColor: "#888888",
        selectedGraphLineAlpha: 1
      },
      chartCursor: {
        //categoryBalloonDateFormat: "YYYY",
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true
      },
      dataDateFormat: "YYYY",
      categoryAxis: {
        // minPeriod: "YYYY",
        // parseDates: true,
        minorGridAlpha: 0.1,
        minorGridEnabled: true
      },
      export: {
        enabled: true
      }
    };
  }
}
