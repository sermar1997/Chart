import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-three-dbarchart',
  templateUrl: './three-dbarchart.component.html',
  styleUrls: ['./three-dbarchart.component.css']
})
export class ThreeDbarchartComponent implements OnInit {
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
      "3Dbardiv",
      this.make3DBarOptions()
    );
    console.log(this.Chart);
  }
}
make3DBarOptions() {
  return {
    theme: "light",
    type: "serial",
    dataProvider: [
      {
        year: 2005,
        income: 23.5
      },
      {
        year: 2006,
        income: 26.2
      },
      {
        year: 2007,
        income: 30.1
      },
      {
        year: 2008,
        income: 29.5
      },
      {
        year: 2009,
        income: 24.6
      }
    ],
    valueAxes: [
      {
        title: "Income in millions, USD"
      }
    ],
    graphs: [
      {
        balloonText: "Income in [[category]]:[[value]]",
        fillAlphas: 1,
        lineAlpha: 0.2,
        title: "Income",
        type: "column",
        valueField: "income"
      }
    ],
    depth3D: 20,
    angle: 30,
    rotate: true,
    categoryField: "year",
    categoryAxis: {
      gridPosition: "start",
      fillAlpha: 0.05,
      position: "left"
    },
    export: {
      enabled: true
    }
  };
}

}
