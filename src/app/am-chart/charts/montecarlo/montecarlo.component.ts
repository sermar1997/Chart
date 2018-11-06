import { Component, OnInit, Input } from "@angular/core";
import { AmChartsService } from "@amcharts/amcharts3-angular";
import * as XLSX from "ts-xlsx";

@Component({
  selector: "app-montecarlo",
  templateUrl: "./montecarlo.component.html",
  styleUrls: ["./montecarlo.component.css"]
})
export class MontecarloComponent implements OnInit {
  //#region constructor
  constructor(private AmCharts: AmChartsService) {}
  //#endregion

  //#region properties
  public Chart: any;
  @Input()
  excelData: any;
  datasets = [];
  graphs = [];
  json: any;

  //#endregion

  //#region methods
  ngOnInit() {
    console.log("excel: " + this.excelData);
    this.loadChart(this.excelData);
  }
  numberOfGraphs(data) {
    let counter;
    for (let index = 0; index < data.length - 1; index++) {
      counter = 0;
      for (let a in data[index]) {
        counter++;
      }
    }
    return counter - 1;
  }
  loadGraphs(numberOfGraphs) {
    for (let index = 1; index <= numberOfGraphs; index++) {
      let graph = {};
      graph["type"] = "line";
      graph["title"] = "Graph " + index;
      graph["valueField"] = "value" + index;
      this.graphs.push(graph);
    }
  }
  getDateFromExcel(date) {
    let d = new Date((date - (25567 + 2)) * 86400 * 1000);
    return d.toLocaleDateString();
  }
  formatDate(array) {
    //get date value from array
    var date = array.shift();
    //Convert into correct date format and add  to array
    array.unshift(this.getDateFromExcel(date));
    return array;
  }
  loadChart(data) {
    console.log(data);
    let arrays = [];
    if (data) {
      //convert excel into json format
      this.json = XLSX.utils.sheet_to_json(data, { raw: true, header: 0 });
      for (let i in this.json) {
        let array = [];
        for (let a in this.json[i]) {
          array.push(this.json[i][a]); //each row
        }
        arrays.push(this.formatDate(array));
      }
      this.loadGraphs(this.numberOfGraphs(this.json));
      this.formatData(arrays);
      this.Chart = this.AmCharts.makeChart(
        "montecarlodiv",
        this.makeMonteCarloOptions(this.datasets)
      );
    }
  }
  formatData(arrays) {
    //All excel rows
    for (var key in arrays) {
      //each excel row
      let counter = 0;
      let graphValue = [];
      for (let value in arrays[key]) {
        if (counter == 0) {
          graphValue["date"] = arrays[key][counter];
        } else {
          graphValue["value" + counter] = arrays[key][counter];
        }
        counter++;
      }
      this.datasets.push(graphValue);
    }
  }
  makeMonteCarloOptions(data) {
    return {
      type: "serial",
      theme: "light",
      mouseWheelZoomEnabled: true,
      dataDateFormat: "YYYY-MM-DD",
      chartScrollbar: {
        color: "#000000",
        oppositeAxis: false,
        scrollbarHeight: 65,
        offset: 5
      },
      categoryAxis: {
        axisColor: "#555555",
        gridAlpha: 0.1,
        gridColor: "#FFFFFF",
        gridCount: 50,
        labelRotation: 65
      },
      dataProvider: data,
      graphs: this.graphs,
      categoryField: "date",
      legend: { enabled: false },
      export: {
        enabled: true
      }
    };
  }
  //#endregion
}
